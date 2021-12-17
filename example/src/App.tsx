import React, { useState } from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import SegmentedControl from 'segmented-control-rn';

const INACTIVE_COLOR = 'rgba(0, 0, 0, 0.5)';
const ACTIVE_COLOR = 'rgb(0, 0, 0)';

const segments = [
  {
    active: (
      <Image
        style={{ width: 20, height: 20, borderRadius: 10, margin: 10 }}
        source={{
          uri: 'https://avatars.githubusercontent.com/u/32979603?s=40&v=4',
        }}
      />
    ),
    inactive: <Text style={{ color: INACTIVE_COLOR }}>First</Text>,
  },
  {
    active: <Text style={{ color: ACTIVE_COLOR }}>Second</Text>,
    inactive: <Text style={{ color: INACTIVE_COLOR }}>Second</Text>,
  },
  {
    active: <Text style={{ color: ACTIVE_COLOR }}>Third</Text>,
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
