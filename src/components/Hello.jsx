import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool, shape } from 'prop-types';

function Hello(props) {
  // const children = props.children;
  // 下記のように分割代入 Distructureing Assignment をすると2回 children を書く必要がなくなる
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        {/* 以下コメントアウトの記述だとESLINT的に好ましくないため下記のように{}で文字列として囲う
        Hello {children} */}
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}

// この記述でchildrenとは何で必須か否かが元の記述先のapp.jsをみなくてもわかるようになる
// 必須ではないpropsは警告がでるのでデフォルト値を設定する
Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

// bang propsの初期値の設定
Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    backgroundColor: '#1E1E1F',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Hello;
