class ChangeCategorNnameToCategories < ActiveRecord::Migration[7.0]
  def change
    add_index :categories, :category_name, unique: true
  end
end
