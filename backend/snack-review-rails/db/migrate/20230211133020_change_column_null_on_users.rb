class ChangeColumnNullOnUsers < ActiveRecord::Migration[7.0]
  def change
    change_column_null :users, :name, null: false
  end
end
