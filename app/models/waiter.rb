class Waiter < ActiveRecord::Base
  belongs_to  :restaurant
  belongs_to  :waiter_app
  
  attr_accessible :username, :password, :email, :role, :first_name, :middle_name, :last_name, :birthday, :mobile_number, :device_id, :key, :active
  attr_accessible :sd_userid, :sd_employeeid
  attr_accessible :restaurant_id, :waiter_app_id
  
  validates :username, :first_name, :presence => true
  validates :username, :password, :length => { :minimum => 4 }
  
  def role_enum
    return ['waiter','manager']
  end
  
end