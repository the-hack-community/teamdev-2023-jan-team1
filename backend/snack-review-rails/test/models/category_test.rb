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
#
require "test_helper"

class CategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
