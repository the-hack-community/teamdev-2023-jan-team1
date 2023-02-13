# == Schema Information
#
# Table name: articles
#
#  id                :bigint           not null, primary key
#  content           :text(65535)      not null
#  discarded_at      :datetime
#  image_url         :text(65535)
#  impressions_count :integer          default(0)
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
class Article < ApplicationRecord
  include ActiveModel::Serializers::JSON
  # discardのモジュールを読み込む
  include Discard::Model
  # デフォルトでは削除されていないものだけを検索するようにする
  default_scope -> { kept }

  validates :title, presence: true
  validates :content, presence: true
  validates :impressions_count, presence: true
  is_impressionable counter_cache: true
  belongs_to :category
  belongs_to :user  
end
