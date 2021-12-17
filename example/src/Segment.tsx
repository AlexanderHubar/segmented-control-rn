import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from '../../src/styles';
import type { SegmentProps } from '../../src/types';

function Segment({
  index,
  segment,
  selectedIndex,
  disabled,
  handleSegmentPress,
  segmentWidth,
  segmentStyle,
}: SegmentProps) {
  const SegmentItemComponent =
    segment[index === selectedIndex ? 'active' : 'inactive'];
  const isDisabled = disabled || segment.disabled;

  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={() => handleSegmentPress(index)}
      key={index}
      style={[
        styles.center,
        isDisabled && styles.disabled,
        { width: segmentWidth },
        segmentStyle,
      ]}
    >
      <View style={styles.center}>{SegmentItemComponent}</View>
    </TouchableOpacity>
  );
}

export default Segment;
