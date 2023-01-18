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
class Shop < ApplicationRecord
  has_many :articles
end
