# usersのテスト用ダミーファイル
20.times do
  User.create!(
     name: Faker::JapaneseMedia::DragonBall.unique.character,
     email: Faker::Internet.email,
     password: "1234test",
     password_confirmation: "1234test"
   )
end
