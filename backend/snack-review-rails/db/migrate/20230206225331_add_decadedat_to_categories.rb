class AddDecadedatToCategories < ActiveRecord::Migration[7.0]
  def change
    add_column :categories, :discarded_at, :datetime
  end
end
