import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Notifications() {
  return (
    <View>
      <Text style={styles.wrapper}>Notifications</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    fontSize: 20,
  },
});
