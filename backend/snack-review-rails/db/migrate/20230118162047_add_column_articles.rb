class AddColumnArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :discarded_at, :datetime
    add_column :articles, :shop_info, :text
    add_column :articles, :shop_url, :text
    add_column :articles, :image_url, :text
  end
end
