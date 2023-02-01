# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Category.create!(
  category_name: "焼き菓子",
  category_color: "bg-red-400"
)

Category.create!(
  category_name: "ケーキ",
  category_color: "bg-blue-400"
)

Category.create!(
  category_name: "チョコ",
  category_color: "bg-green-400"
)

Category.create!(
  category_name: "和菓子",
  category_color: "bg-purple-400"
)

Category.create!(
  category_name: "その他",
  category_color: "bg-yellow-400"
)


