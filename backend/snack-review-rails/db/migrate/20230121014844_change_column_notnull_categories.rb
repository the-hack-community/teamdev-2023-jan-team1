class ChangeColumnNotnullCategories < ActiveRecord::Migration[7.0]
  def change
    change_column_null :categories, :name, false
    change_column_null :categories, :color, false
  end
end
