# == Schema Information
#
# Table name: shops
#
#  id          :bigint           not null, primary key
#  information :text(65535)
#  url         :text(65535)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require "test_helper"

class ShopTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
