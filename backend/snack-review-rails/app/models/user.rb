# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                 :bigint           not null, primary key
#  current_sign_in_at :datetime
#  current_sign_in_ip :string(255)
#  email              :string(255)
#  encrypted_password :string(255)      default(""), not null
#  last_sign_in_at    :datetime
#  last_sign_in_ip    :string(255)
#  name               :string(255)
#  provider           :string(255)      default("email"), not null
#  sign_in_count      :integer          default(0), not null
#  tokens             :text(65535)
#  uid                :string(255)      default(""), not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
# Indexes
#
#  index_users_on_email             (email) UNIQUE
#  index_users_on_uid_and_provider  (uid,provider) UNIQUE
#
class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable
  include DeviseTokenAuth::Concerns::User

  has_many :articles
end
