class User < ApplicationRecord
    has_secure_password


  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :profile_picture, presence: true
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 8 }
end
