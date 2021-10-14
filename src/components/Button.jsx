import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { func, string } from 'prop-types';

export default function Button(props) {
  const { children, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.button}>{children}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  children: string.isRequired,
  onPress: func,
};

Button.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderRadius: 8,
    color: '#585959',
    fontSize: 16,
    fontWeight: 'bold',
    height: 44,
    lineHeight: 44,
    width: 200,
    textAlign: 'center',

    shadowColor: '#111',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },

});
