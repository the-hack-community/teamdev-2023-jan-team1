# == Schema Information
#
# Table name: articles
#
#  id                :bigint           not null, primary key
#  content           :text(65535)      not null
#  discarded_at      :datetime
#  image_url         :text(65535)
#  shops_information :text(65535)
#  title             :string(255)      not null
#  url               :text(65535)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  category_id       :bigint
#  user_id           :bigint
#
# Indexes
#
#  index_articles_on_category_id  (category_id)
#  index_articles_on_user_id      (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (user_id => users.id)
#
class ArticleSerializer < ActiveModel::Serializer
  # attribute :name, if: -> { instance_options[:page] == :my_profile }
  type 'article'
  attributes :id, :title, :category_name, :category_color, :shops_information, :url, :image_url, :created_at, :updated_at
  def category_name
    object.category[:category_name] 
  end 
  def category_color
    object.category[:category_color]
  end 
  # belongs_to :category, serializer: CategorySerializer
end
