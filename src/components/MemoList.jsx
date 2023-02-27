import React from 'react';
import { Alert, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf } from 'prop-types';

export default function MemoList(props) {
  const { memos } = props;
  // navigation が props に渡るのはapp.jsxに書いているscreenだけなので
  // useNavigationを呼び出す必要がある
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.list}
        // , { id: item.id }) を書くだけで下の階層に引き継げる
        onPress={() => { navigation.navigate('MemoDetail', { id: item.id }); }}
      >
        <View style={styles.list__item}>
          <View style={styles.list__contentBox}>
            {/* numberoflines で改行が無効になる */}
            <Text style={styles.list__text} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.list__date}>{String(item.updatedAt)}</Text>
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

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

MemoList.propTypes = {
  // 一つの辞書型ではないのでさらにarrayOfで囲む必要がある
  memos: arrayOf(shape({
    id: string,
    title: string,
    bodyText: string,
    // JSの日付のクラスから派生したので instanceOF らしい
    updatedAt: instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
