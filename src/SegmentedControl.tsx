import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing, LayoutChangeEvent, View } from 'react-native';

import type { NativeEvent, SegmentedControlProps } from './types';
import styles from './styles';

import { Segment } from './Segment';

function SegmentedControl({
  segments,
  backgroundColor = '#E6EAF2',
  tintColor = '#FFFFFF',
  selectedIndex = 2,
  style,
  segmentStyle,
  activeSegmentStyle,
  disabled,
  onChange,
  onValueChange,
}: SegmentedControlProps): JSX.Element {
  const [segmentWidth, setSegmentWidth] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;

  const handleChange = useCallback(
    (index: number): void => {
      const event: NativeEvent = {
        nativeEvent: {
          value: segments[index].active,
          selectedSegmentIndex: index,
        },
      };

      onValueChange && onValueChange(event);
      onChange && onChange(index);
    },
    [onValueChange, onChange, segments]
  );

  const onSegmentLayout = (e: LayoutChangeEvent): void => {
    const layoutWidth = e.nativeEvent.layout.width;
    const segmentItemWidth = layoutWidth / segments.length;

    if (segmentItemWidth !== segmentWidth) {
      setSegmentWidth(segmentItemWidth);
    }
  };

  const handleSegmentPress = useCallback(
    (index: number): void => {
      Animated.timing(animation, {
        toValue: segmentWidth * index,
        duration: 300,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }).start();
      handleChange(index);
    },
    [animation, segmentWidth, handleChange]
  );

  useEffect(() => {
    if (animation && segmentWidth) {
      handleSegmentPress(selectedIndex);
    }
  }, [
    animation,
    handleSegmentPress,
    segmentWidth,
    selectedIndex,
    handleChange,
  ]);

  return (
    <View
      style={[
        styles.segmentControlWrapper,
        disabled && styles.disabled,
        { backgroundColor },
        style,
      ]}
    >
      <View style={styles.segmentControlInner} onLayout={onSegmentLayout}>
        {Boolean(segmentWidth) && (
          <Animated.View
            style={[
              styles.activeSegmentBackground,
              {
                width: segmentWidth,
                transform: [{ translateX: animation }],
                backgroundColor: tintColor,
              },
              activeSegmentStyle,
            ]}
          />
        )}
        {segments.map((segment, index) => (
          <Segment
            key={index}
            index={index}
            segment={segment}
            selectedIndex={selectedIndex}
            disabled={disabled}
            handleSegmentPress={handleSegmentPress}
            segmentWidth={segmentWidth}
            segmentStyle={segmentStyle}
          />
        ))}
      </View>
    </View>
  );
}

export { SegmentedControl };
