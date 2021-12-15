import React from 'react';
import { Alert, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MemoList() {
  // navigation が props に渡るのはapp.jsxに書いているscreenだけなので
  // useNavigationを呼び出す必要がある
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.list}
      onPress={() => { navigation.navigate('MemoDetail'); }}
    >
      <View style={styles.list__item}>
        <View style={styles.list__contentBox}>
          <Text style={styles.list__text}>買い物リスト</Text>
          <Text style={styles.list__date}>2021年6月30日</Text>
        </View>
        <TouchableOpacity
          style={styles.list__trash}
          onPress={() => { Alert.alert('削除する場合はOKを選択'); }}
        >
          <Text>🗑</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  list__item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 4,
    minHeight: 80,
  },
  list__text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1E1E1F',
  },
  list__date: {
    color: '#1E1E1F',
  },
  list__trash: {
    alignItems: 'center',
    height: 44,
    width: 44,
  },
});
