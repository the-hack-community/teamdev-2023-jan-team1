# == Schema Information
#
# Table name: categories
#
#  id             :bigint           not null, primary key
#  category_color :string(255)      not null
#  category_name  :string(255)      not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Category < ApplicationRecord
  validates :category_name, presence: true
  validates :category_color, presence: true
  has_many :articles
end
