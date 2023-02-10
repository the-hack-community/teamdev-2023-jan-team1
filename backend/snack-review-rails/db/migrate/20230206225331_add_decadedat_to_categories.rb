class AddDecadedatToCategories < ActiveRecord::Migration[7.0]
  def change
    add_column :categories, :discarded_at, :datetime
    add_index :categories, :discarded_at
  end
end
