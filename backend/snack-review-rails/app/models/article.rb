# == Schema Information
#
# Table name: articles
#
#  id           :bigint           not null, primary key
#  content      :text(65535)
#  discarded_at :datetime
#  title        :string(255)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Article < ApplicationRecord
  validates :title, presence: true
  validates :content, presence: true
  belongs_to :shop
  belongs_to :category
end
