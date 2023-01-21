# == Schema Information
#
# Table name: articles
#
#  id           :bigint           not null, primary key
#  content      :text(65535)      not null
#  discarded_at :datetime
#  image_url    :text(65535)
#  shop_info    :text(65535)
#  shop_url     :text(65535)
#  title        :string(255)      not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Article < ApplicationRecord
  validates :title, presence: true
  validates :content, presence: true
  belongs_to :category
end
