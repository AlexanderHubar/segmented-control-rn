import type { ViewStyle } from 'react-native';

export interface NativeEvent {
  nativeEvent: {
    value: any;
    selectedSegmentIndex: number;
  };
}

export interface Segment {
  active: JSX.Element;
  inactive: JSX.Element;
  value: any;
  disabled?: boolean;
}

export interface SegmentProps {
  index: number;
  segment: Segment;
  selectedIndex: number;
  disabled?: boolean;
  handleSegmentPress: (activeIndex: number) => void;
  segmentWidth: number;
  segmentStyle?: ViewStyle;
}

export interface SegmentedControlProps {
  segments: Segment[];
  backgroundColor?: string;
  tintColor?: string;
  selectedIndex: number;
  style?: ViewStyle;
  segmentStyle?: ViewStyle;
  activeSegmentStyle?: ViewStyle;
  disabled?: boolean;
  onChange?: (activeIndex: number) => void;
  onValueChange?: (event: NativeEvent) => void;
}
