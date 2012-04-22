class Section < ActiveRecord::Base
  belongs_to :menu
	has_many :dishes
	has_many :subsections
	has_attached_file(
	 :photo,
	 :path => ":chain_rest_id/img/sections/:style/section_:id.:extension",
	 :styles => { :mini => TocartaAdmin::Application::IMAGE_MINI_SIZE, :thumb => TocartaAdmin::Application::IMAGE_THUMBNAIL_SIZE }
	)
	translates :name, :fallbacks_for_empty_translations => true
	attr_accessible :name, :active, :position, :photo, :hasBigSubsections
	attr_accessible :menu_id
	
	validates_attachment_presence :photo
	
end
