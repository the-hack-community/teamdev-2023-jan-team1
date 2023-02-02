# == Schema Information
#
# Table name: categories
#
#  id             :bigint           not null, primary key
#  category_color :string(255)      not null
#  category_name  :string(255)      not null
#  discarded_at   :datetime
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
# Indexes
#
#  index_categories_on_category_name  (category_name) UNIQUE
#  index_categories_on_discarded_at   (discarded_at)
#
class Category < ApplicationRecord
  include Discard::Model
  default_scope -> { kept }
  
  validates :category_name, presence: true, uniqueness: true
  validates :category_color, presence: true
  has_many :article
end
