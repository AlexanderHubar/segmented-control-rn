import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  activeSegmentBackground: {
    borderRadius: 7,
    position: 'absolute',
    height: '100%',
  },
  segmentControlWrapper: {
    width: '100%',
    minHeight: 28,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentControlInner: {
    margin: 2,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.4,
  },
});
