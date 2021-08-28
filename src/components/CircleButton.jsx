import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function CircleButton(props) {
  const { children } = props;
  return (
    <View style={styles.plusBtn}>
      <Text style={styles.plusBtn__label}>{children}</Text>
    </View>
  );
}

CircleButton.propTypes = {
  children: string.isRequired,
};

const styles = StyleSheet.create({
  plusBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1F',
    borderRadius: 22,
    width: 60,
    height: 60,
    position: 'absolute',
    right: 32,
    bottom: 32,
    shadowColor: '#111',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  plusBtn__label: {
    color: '#fff',
    fontSize: 44,
    lineHeight: 44,
  },
});
