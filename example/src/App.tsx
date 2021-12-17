import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import SegmentedControl from 'segmented-control-rn';
import { useState } from 'react';

const INACTIVE_COLOR = 'rgba(0, 0, 0, 0.5)';

const segments = [
  {
    active: <Text style={{ color: INACTIVE_COLOR }}>First</Text>,
    inactive: <Text style={{ color: INACTIVE_COLOR }}>First</Text>,
  },
  {
    active: <Text>Second</Text>,
    inactive: <Text style={{ color: INACTIVE_COLOR }}>Second</Text>,
  },
  {
    active: <Text>Third</Text>,
    inactive: <Text style={{ color: INACTIVE_COLOR }}>Third</Text>,
  },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <SegmentedControl
        onChange={(index) => setActiveIndex(index)}
        segments={segments}
        selectedIndex={activeIndex}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
