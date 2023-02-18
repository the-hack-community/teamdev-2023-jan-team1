# usersのテスト用ダミーファイル
20.times do
  User.create!(
     name: Faker::JapaneseMedia::DragonBall.unique.character,
     email: Faker::Internet.email,
     password: "1234test",
     password_confirmation: "1234test"
   )
end


# articlesのテスト用ダミーファイル
9.times do 
  Article.create!(
    title: Faker::Books::CultureSeries.unique.book,
    content: Faker::JapaneseMedia::OnePiece.unique.quote,
    category_id: Faker::Number.between(from: 1, to: 9),
    user_id: Faker::Number.between(from: 1, to: 20),
    shops_information:Faker::Restaurant.review,
    url: Faker::Internet.url,
    image_url: Faker::Avatar.image,
    impressions_count:Faker::Number.between(from: 1, to: 10)
  )
end

