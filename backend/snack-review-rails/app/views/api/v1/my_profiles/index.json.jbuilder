json.set! :Users do
  json.array! @users do | user |
    json.name user.name
  end
end

json.set! :Articles do
  json.array! @articles do | article |
    json.id article.id
    json.title article.title
    json.categoryName article.category.category_name
    json.categoryColor article.category.category_color
    json.shopsInformation article.shops_information
    json.url article.url
    json.imageUrl article.image_url
    json.userName article.user.name
    json.allowEditFlag api_v1_user_signed_in? && article.user.id == current_api_v1_user.id
    json.createdAt article.created_at
    json.updatedAt article.updated_at
  end
end
