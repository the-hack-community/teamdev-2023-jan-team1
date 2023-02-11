class RenameNameColumnToCategories < ActiveRecord::Migration[7.0]
  def change
    rename_column :categories, :name, :category_name
    rename_column :categories, :color, :category_color
  end
end
