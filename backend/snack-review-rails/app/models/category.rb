# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  color      :string(255)      not null
#  name       :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Category < ApplicationRecord
  validates :name, presence: true
  validates :color, presence: true
  has_many :articles
end
