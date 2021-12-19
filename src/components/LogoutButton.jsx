import React from 'react';
import { Alert, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

export default function LogOutButton() {
  // Hooksはコンポーネントの直下に置く必要がある
  const navigation = useNavigation();
  const auth = getAuth();

  const handlePress = () => {
    signOut(auth).then(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }).catch((error) => {
      Alert.alert('ログアウトに失敗しました');
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.button}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    color: '#ccc',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
