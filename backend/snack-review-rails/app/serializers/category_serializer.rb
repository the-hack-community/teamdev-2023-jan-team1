class CategorySerializer < ActiveModel::Serializer
  ActiveModelSerializers.config.key_transform = :camel_lower
  attributes :id ,:category_name,:category_color
end
