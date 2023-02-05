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
#  index_articles_on_category_id   (category_id)
#  index_articles_on_discarded_at  (discarded_at)
#  index_articles_on_user_id       (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (user_id => users.id)
#
require 'open_graph_reader'
class Article < ApplicationRecord
  include ActiveModel::Serializers::JSON
  # discardのモジュールを読み込む
  include Discard::Model
  # デフォルトでは削除されていないものだけを検索するようにする
  default_scope -> { kept }

  def as_json(options = {})
    super(options.merge(root: true, camelize_keys: false))
  end

  def image_url(url)
    meta_info = OpenGraphReader.fetch(url)
    if (meta_info.respond_to?(:og, true) && meta_info.og.respond_to?(:image, true) && meta_info.og.image.respond_to?(:url)) 
      return meta_info.og.image.url
    else
      return nil
    end
  end

  def created_at
    object.createdAt
  end
  
  def updated_at
    object.updatedAt
  end
  
  def shops_information
    object.shopsInformation
  end

  def category_id
    object.categoryId
  end

  def user_id
    object.userId
  end

  validates :title, presence: true
  validates :content, presence: true
  belongs_to :category
  belongs_to :user



  
end
