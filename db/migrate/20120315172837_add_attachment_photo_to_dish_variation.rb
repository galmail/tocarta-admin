class AddAttachmentPhotoToDishVariation < ActiveRecord::Migration
  def self.up
    add_column :dish_variations, :photo_file_name, :string
    add_column :dish_variations, :photo_content_type, :string
    add_column :dish_variations, :photo_file_size, :integer
    add_column :dish_variations, :photo_updated_at, :datetime
  end

  def self.down
    remove_column :dish_variations, :photo_file_name
    remove_column :dish_variations, :photo_content_type
    remove_column :dish_variations, :photo_file_size
    remove_column :dish_variations, :photo_updated_at
  end
end
