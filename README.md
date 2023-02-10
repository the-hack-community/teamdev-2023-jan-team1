[![My Skills](https://skillicons.dev/icons?i=js,html,css,tailwind,,nextjs,rails,mysql,figma,git,postman)](https://skillicons.dev)

# Welcome to シェア菓子 👋

> お気に入りのお菓子を紹介するサイトです

# このサイトでできること

|カテゴリー|#|機能名          |説明|                                |非ログイン時 利用可否|
|----------|-|------------------|------------------------------------------------------|  |
|認証      |1|サインアップ機能  |・メールアドレス|パスワードで会員登録できる。|        |  |
|          | |                  |・ログイン時のみ利用できる機能が利用できるようになる。|◯|
|          |2|ログイン機能      |・メールアドレス、パスワードでログインできる。|       |  |
|          | |                  |・ログイン時のみ利用できる機能が利用できるようになる。|◯|
|          |3|ログアウト機能    |・ログインしている状態からログアウト状態にする。      |  |
|          | |                  |・ログイン時のみ利用できる機能が利用できなくなる。    |×|
|投稿      |4|投稿一覧表示機能  |・投稿を一覧表示する。                                |◯|
|          |5|投稿詳細表示機能  |・投稿一覧画面で選択した商品の詳細情報を表示する。    |◯|
|          |6|投稿編集・削除機能|・ 自分の投稿記事の編集、削除ができる。	             |×|
|          |7|自分の投稿一覧表示|・マイページで過去の自分の投稿を一覧表示する。	       |×|
|          | |投稿数表示機能	  |・マイページで自分の投稿数を表示することができる。    | |
|ユーザー情報


# Author
|User          |Picture|
|--------------|--------|
|nekoyashiki   |https://ca.slack-edge.com/T03UY8BU7L1-U049LUB7UM6-ee5c362f0b09-512|
|yuuki-fujimoto|https://ca.slack-edge.com/T03UY8BU7L1-U04EX5CUBG9-ga1426016533-512|
|あるどん      |https://ca.slack-edge.com/T03UY8BU7L1-U04HLTRJAGZ-045472983ee0-512|
|おさむ        |https://ca.slack-edge.com/T03UY8BU7L1-U0498N2GWQ6-b72a8a149181-512|
|まえけん      |https://ca.slack-edge.com/T03UY8BU7L1-U0496QZDAR1-g9820e18427e-512|
|ワタ          |https://ca.slack-edge.com/T03UY8BU7L1-U04K0PWUM2L-4e3e03e96ec3-512|
|ふみ          |https://ca.slack-edge.com/T03UY8BU7L1-U04DAAJ8XGU-cac22f215bd2-512|
## Install

```sh
npm install,rails db:migrate
```

## Usage

```sh
npm run dev,rails s
```


ruby "3.1.2"
# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.4"
# Use mysql as the database for Active Record
gem "mysql2", "~> 0.5"
# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"

“next": "13.1.1",
"react": "18.2.0",

# 使用したGem
- devise # 認証まわりはおまかせ
- rspec-rails # RSpec
- pry-rails # 最高のデバッグをあなたに
- factory_bot_rails # テストデータはお手の物
- rubocop # リンター
- annotate # モデルにDB定義をコメントしてくれる
- rails-erd # Railsのモデルを見てER図を作ってくれる
- ruby-graphviz # グラフの生成
- kaminari # ページングといえばこれ
- config # 環境ごとの設定はここ
- dotenv-rails # .envを使う方はこちら
- juilder # JSONを簡単に生成
- discard #論理削除
  
## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_