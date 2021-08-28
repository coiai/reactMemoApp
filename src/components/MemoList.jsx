import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MemoList() {
  return (
    <View style={styles.list}>
      <View style={styles.list__item}>
        <View style={styles.list__contentBox}>
          <Text style={styles.list__text}>買い物リスト</Text>
          <Text style={styles.list__date}>2021年6月30日</Text>
        </View>
        <View style={styles.list__trash}>
          <Text>🗑</Text>
        </View>
      </View>
      <View style={styles.list__item}>
        <View style={styles.list__contentBox}>
          <Text style={styles.list__text}>買い物リスト</Text>
          <Text style={styles.list__date}>2021年6月30日</Text>
        </View>
        <View style={styles.list__trash}>
          <Text>🗑</Text>
        </View>
      </View>
      <View style={styles.list__item}>
        <View style={styles.list__contentBox}>
          <Text style={styles.list__text}>買い物リスト</Text>
          <Text style={styles.list__date}>2021年6月30日</Text>
        </View>
        <View style={styles.list__trash}>
          <Text>🗑</Text>
        </View>
      </View>
    </View>
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
  },
});
