class AddColumnsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :reset_password_token, :string
    add_column :users, :reset_password_sent_at, :date
    add_column :users, :allow_password_change, :boolean  , :default => true
  end
end
