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
#
# Indexes
#
#  index_articles_on_category_id  (category_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#
class Article < ApplicationRecord
  validates :title, presence: true
  validates :content, presence: true
  belongs_to :category
end
