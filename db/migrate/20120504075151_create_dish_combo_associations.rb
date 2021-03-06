class CreateDishComboAssociations < ActiveRecord::Migration
  def change
    if !self.table_exists?("dish_combo_associations")
      create_table :dish_combo_associations do |t|
        t.references :dish
        t.references :combo
  
        t.timestamps
      end
      add_index :dish_combo_associations, :dish_id
      add_index :dish_combo_associations, :combo_id
    end
  end
end
