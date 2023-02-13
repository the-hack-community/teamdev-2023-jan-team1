class AddIndexToArticles < ActiveRecord::Migration[7.0]
  def change
    add_index :articles, :discarded_at
  end
end
