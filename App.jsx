import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, cardStyleInterPolator } from '@react-navigation/native-stack';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDeatailScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { CardStyleInterpolators } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

// eslint-disable-next-line react/function-component-definition
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTitleStyle: { color: 'white' },
          headerTitle: 'Memo App',
          headerTintColor: 'white',
          // ヘッダーに出る戻るの部分の文章変更
          headerBackTitle: '戻る',
          // 画面遷移のアニメーションの変更 この記述でAndroidで画面遷移時に横方向アニメーションになる
          cardStyleInterPolator: CardStyleInterpolators.forHorizontalIOS,
          // Androidでスワイプで戻れるようにする
          gestureEnabled: true,
          gestureDirection: 'holizontal',
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            // 登録画面への遷移は奥行きに対してのアニメーションになる 詳しくは公式ドキュメントにて
            // https://reactnavigation.org/docs/stack-navigator
            cardStyleInterPolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterPolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
