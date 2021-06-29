#expo 0から始めるメモ

$expo init
$expo start
$expo publish
package.json に "privacy": "unlisted" にするとリストに公開されないようになるらしい

##ファイル構成について
###もともとあるフォルダ
.expo
.expo-shared は触らない
assests 画像が入っている
node_modules JSのライブラリが入っている
package.json 使用しているライブラリを定義しておく　ここにexpoのバージョンも書いてある　コマンドの登録もできる

App.js アプリ本体
app.json アプリの設定ファイル　リリースの時に必要
babel.config.js 最初はあまり触らない
packageーlock.json 基本触らない依存関係の依存関係みたいな感じ

###自分で作る開発用のフォルダ
src
    /screens
    /components

##ESLint について
最新バージョンの確認
$npm show eslint

--save-dev のオプションはdevDependenciesという意味
これで開発用の依存関係があるよという意味になり
package.jsonのdevDependenciesのところに追加される
$npm install --save-dev eslint@7.29.0

ESLintの初期化
コーディングルールを聞かれるよ　AirBnbのコーディングルール気になる
$npx eslint --init

.js でeslistのJSXの警告がある場合は .jsx にすることが可能

ルールも変えられる
.eslintrc.json に例えば以下を記述すると順番的に定義前に関数を使っても警告が出て来なくなる
    "rules": {
        "no-use-before-define": 0
    }
下記一行だけESLint無視する記述もできる
{/* eslint-disable-next-line */}

##コンポーネントの基本
expor default function の中にJSの関数を書いていき
return の中がページとして出力する
Reactでは指定してないとdisplay:flex がデフォルト　また基本的に横並びでなく縦並びのflexになる

react native はIOSやAndroidのコードをまとめて React Native Components としている
自分で使ったコンポーネントや世界中のコミュニティが作ったコンポーネントもある

コンポーネントはアプリを構成する小さな要素のようなもの

##自分でコンポーネントを作る
試しに Hello.jsx を作った
App.js で読み込む際は import して <Hello /> という書き方をした

jsxでオブジェクトを扱う場合は{}で囲う

##propsについて
propsはpropaties の略語
親のコンポーネントを受け取る

##proptypes
$npm show prop-types
$npm install prop-types@15.7.2 
受け取ったpropsはなんなのかの記述のために使う

##小技
空のファイルをGit管理するために
.gitkeep