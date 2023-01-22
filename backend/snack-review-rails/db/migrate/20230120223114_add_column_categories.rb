class AddColumnCategories < ActiveRecord::Migration[7.0]
  def change
    add_column :categories, :color, :string
  end
end
