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

##小技
空のファイルをGit管理するために
.gitkeep