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

##小技
空のファイルをGit管理するために
.gitkeep