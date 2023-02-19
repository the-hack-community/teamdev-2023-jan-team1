[![My Skills](https://skillicons.dev/icons?i=js,html,css,tailwind,react,nextjs,rails,mysql,figma,git,postman)](https://skillicons.dev)

# Welcome to シェア菓子 👋

> お気に入りのお菓子を紹介するサイトです
※プレビュー動画（仮）

https://user-images.githubusercontent.com/86139603/219520055-282f1d65-7677-4fec-b8b6-eaee320edf7b.mp4


# このサイトでできること


|カテゴリー|#|機能名          |説明                                |非ログイン時 利用可否|
|----------|-|------------------|----------------------------------------|--|
|認証      |1|サインアップ機能  |・メールアドレス・パスワードで会員登録できる。　　　　　　　　　        |◯|
|          | |                  |・ログイン時のみ利用できる機能が利用できるようになる。|◯|
|          |2|ログイン機能      |・メールアドレス、パスワードでログインできる。　　　　　　   　　    |◯|
|          | |                  |・ログイン時のみ利用できる機能が利用できるようになる。|◯|
|          |3|ログアウト機能    |・ログインしている状態からログアウト状態にする。     　　　　　　　　 |×|
|          | |                  |・ログイン時のみ利用できる機能が利用できなくなる。   |×|
|投稿      |4|投稿一覧表示機能  |・投稿を一覧表示する。                           |◯|
|          |5|投稿詳細表示機能  |・投稿一覧画面で選択した商品の詳細情報を表示する。    |◯|
|          |6|投稿編集・削除機能|・ 自分の投稿記事の編集、削除ができる。	            |×|
|          |7|自分の投稿一覧表示|・マイページで過去の自分の投稿を一覧表示する。	       |×|
|ユーザー情報|8|会員情報編集機能|・登録しているユーザー情報を編集することができる。  　　　　    |×|


# チームメンバー
|メンバー        |イメージ|
|--------------|--------|
|nekoyashiki   |![nekoyashiki](https://user-images.githubusercontent.com/86139603/219514876-3117e6d2-5469-4435-be50-450c966cd20d.png)|
|yuuki-fujimoto|![fujimoto](https://user-images.githubusercontent.com/86139603/219514935-d10725c0-23c3-40b3-9bf0-3b2dd5dce4a2.png)|
|あるどん      |![あるどん](https://user-images.githubusercontent.com/86139603/219514983-db0cda9d-9331-4e8d-8101-12de39e6a8fe.png)|
|おさむ        |![osamu](https://user-images.githubusercontent.com/86139603/219515064-5d7b0fd7-6c04-4b77-a41b-257c6808b906.png)|
|まえけん      |![まえけん](https://user-images.githubusercontent.com/86139603/219515083-74387635-0aac-4f61-b5ba-5efd7a70be9d.png)|
|ワタ          |![wata](https://user-images.githubusercontent.com/86139603/219515105-ffd1c04a-d7fc-40f8-b082-382aab0be903.jpeg)|
|ふみ          |![fumi](https://user-images.githubusercontent.com/86139603/219515147-e9546e85-065f-4a43-99eb-331560f539aa.jpeg)|

## インストール

```sh
npm install
```
```sh
rails db:migrate
```


## 使用方法

```sh
npm run dev
```
```sh
rails s
```

## ポート
フロントエンドports:3000

バックエンドports:3001


## 環境
```
フロントエンド
Next.js：　"13.1.1"
Tailwindcss：　"^3.2.4"
typescript:　"4.9.4"
zod：　"^3.20.2"

バックエンド(APIとして)
Ruby: "3.1.2"
Ruby on Rails： "7.0.4.2"

データベース言語
MySQL2： "0.5.5"
```

## バックエンドで使用した技術
- devise #認証まわりはおまかせ
- rack-cors #cors設定
- rspec-rails #RSpecテストはRailsの醍醐味
- pry-rails #最高のデバッグをあなたに
- factory_bot_rails #テストデータはお手の物
- rubocop #Railsには必須のリンター
- annotate #モデルにDB定義をコメントしてくれる
- rails-erd #Railsのモデルを見てER図を作ってくれる
- ruby-graphviz #グラフの生成
- config #環境ごとの設定はここへ
- dotenv-rails #.envを使う方はこちら
- jbuilder #JSONを簡単に生成
- active_model_serializers #SON形式のデータの整える
- discard #論理削除するならこれ
- faker #豊富なダミーデータ
  
## フロントエンドで使用した技術
- ESlint #コードをきれいに保つ
- zod #バリデーションライブラリ

