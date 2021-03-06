# == Schema Information
#
# Table name: restaurant_settings
#
#  id                  :integer          not null, primary key
#  restaurant_id       :integer
#  name                :string(255)
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  num_licenses        :integer
#  default_language    :string(255)
#  last_menu_sync      :datetime
#  multilang_homepage  :boolean          default(FALSE)
#  games               :boolean          default(FALSE)
#  sync_photos         :boolean          default(FALSE)
#  call_waiter_button  :boolean          default(TRUE)
#  order_button        :boolean          default(TRUE)
#  request_bill_button :boolean          default(TRUE)
#  show_help_button    :boolean          default(TRUE)
#  show_survey         :boolean          default(TRUE)
#  access_key          :integer          default(1111)
#  show_filters        :boolean          default(FALSE)
#  supported_lang      :string(255)
#

class RestaurantSetting < ActiveRecord::Base
  belongs_to :restaurant
	serialize :supported_lang, Array
	attr_accessible :name, :num_licenses, :default_language, :last_menu_sync, :access_key, :supported_lang
	attr_accessible :multilang_homepage, :games, :sync_photos, :call_waiter_button, :order_button, :request_bill_button, :show_help_button, :show_survey, :show_filters
	attr_accessible :restaurant_id
	
	def supported_lang_enum
    [ [ 'English', "en" ], [ 'French', "fr" ], [ 'Spanish', "es" ], [ 'Catalan', "cat" ], [ 'Russian', "ru" ], [ 'German', "de" ] ]
  end
	
	### Validations ###
	
	validates :num_licenses, :restaurant_id, :access_key, :presence => true
	validates :access_key, :length => { :is => 4 }	  
	
end
