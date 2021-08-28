import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function Button(props) {
  const { children } = props;
  return (
    <Text style={styles.button}>{children}</Text>
  );
}

Button.propTypes = {
  children: string.isRequired,
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
