import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appbar__textBox}>
          <Text style={styles.appbar__title}>CoiaiMemo</Text>
          <Text style={styles.appbar__logout}>Logout</Text>
        </View>
      </View>

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

      <View style={styles.plusBtn}>
        <Text style={styles.plusBtn__label}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1 の指定で画面いっぱいに広がるということ また標準で縦並びになる
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  appbar: {
    backgroundColor: '#1E1E1F',
    height: 100,
    width: '100%',
    justifyContent: 'flex-end',
  },
  appbar__textBox: {
    backgroundColor: '#1E1E1F',
    alignItems: 'center',
  },
  appbar__title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 8,
  },
  appbar__logout: {
    color: '#fff',
    position: 'absolute',
    right: 16,
    bottom: 8,
  },
  list__item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 16,
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
  },
  plusBtn__label: {
    color: '#fff',
    fontSize: 44,
    lineHeight: 44,
  },
});
