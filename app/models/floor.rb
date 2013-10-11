class Floor < ActiveRecord::Base
  include Utils
  before_save :generate_sid
  
  belongs_to  :restaurant
  has_many    :tables
  
  attr_accessible :name, :sid, :restaurant_id
  
end
