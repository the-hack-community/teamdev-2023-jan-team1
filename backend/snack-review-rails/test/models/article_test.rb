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
require "test_helper"

class ArticleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
