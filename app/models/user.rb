# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(128)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0)
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string(255)
#  last_sign_in_ip        :string(255)
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  role                   :string(255)
#  confirmation_token     :string(255)
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#

class User < ActiveRecord::Base
  rolify

  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :rememberable, :trackable, :validatable, :recoverable,
         :confirmable
         # :omniauthable, :omniauth_providers => [:facebook]

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :rol

  after_create :make_restaurant_demo

  has_many :chains
  has_many :restaurants
  has_one  :client

  has_many :authentications, :dependent => :delete_all

  def rol
    @rol || 'user'
  end

  def apply_omniauth(auth)
    # In previous omniauth, 'user_info' was used in place of 'raw_info'
    self.email = auth['extra']['raw_info']['email']
    # Save token
    authentications.build(:provider => auth['provider'], :uid => auth['uid'], :token => auth['credentials']['token'])
    # FIXME: use the correct role
    self.add_role :user
  end

  private

  # Create a restaurant and dependencies (chain, section, menu)
  # FIXME: This is not the best place for this
  # TODO: default images must be set in views is they not exist with a helper
  DEF_LOGO     = Rails.root.join('app','assets','images', 'default_restaurant_logo.png')
  DEF_SECTION  = Rails.root.join('app','assets','images', 'default_section.png')
  DEF_DISH     = Rails.root.join('app','assets','images', 'default_dish.png')
  def make_restaurant_demo
    if self.has_role? :manager # only for this role

      chain = Chain.create(user_id: self.id, name: "Mi Cadena de Restaurantes #{self.email}", logo: DEF_LOGO, email: self.email)

      restaurant = Restaurant.create(user_id: self.id, chain_id: chain.id, name: 'Mi Restaurante Demo', email: self.email)

      menu = Menu.create(restaurant_id: restaurant.id, name: "Mi Menu", menu_type: 'main')

      section = Section.create(menu_id: menu.id, name: 'Mi Seccion', active: true, photo: DEF_SECTION)

      Dish.create(name: 'principal', photo: DEF_DISH, active: true, rate_me: true, description: 'plato principal', price: 20, chain_id: chain.id, position: 1, section_ids: [section.id])
      Dish.create(name: 'segundo', photo: DEF_DISH, active: true, rate_me: true, description: 'plato principal', price: 15, chain_id: chain.id, position: 1, section_ids: [section.id])
    end
  end

end
