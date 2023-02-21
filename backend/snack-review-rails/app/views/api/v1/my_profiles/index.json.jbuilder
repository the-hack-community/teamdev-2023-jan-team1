json.user do
  json.name @user.name
  json.email @user.email
end
json.set! :articles do
  json.array! @articles do | article |
    json.id article.id
    json.title article.title
    json.categoryName article.category.category_name
    json.categoryColor article.category.category_color
    json.shopsInformation article.shops_information
    json.content article.content
    json.url article.url
    json.imageUrl article.image_url
    json.userName article.user.name
    json.allowEditFlag true
    json.createdAt article.created_at
    json.updatedAt article.updated_at
  end
end
