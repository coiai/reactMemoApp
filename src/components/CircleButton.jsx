import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { func, oneOfType, shape, string } from 'prop-types';

export default function CircleButton(props) {
  const { children, onPress, style } = props;
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.button__label}>{children}</Text>
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  children: oneOfType([
    string,
    shape(),
  ]).isRequired,
  style: shape(),
  onPress: func,
};

CircleButton.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
  button__label: {
    color: '#1E1E1F',
    fontSize: 32,
    lineHeight: 44,
  },
});
