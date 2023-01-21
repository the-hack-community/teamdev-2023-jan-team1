class RenameColumnToArticles < ActiveRecord::Migration[7.0]
  def change
    rename_column :articles, :shop_info, :shops_information
    rename_column :articles, :shop_url, :url
  end
end
