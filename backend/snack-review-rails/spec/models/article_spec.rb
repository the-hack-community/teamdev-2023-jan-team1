# == Schema Information
#
# Table name: articles
#
#  id                :bigint           not null, primary key
#  content           :text(65535)      not null
#  discarded_at      :datetime
#  image_url         :text(65535)
#  shops_information :text(65535)
#  title             :string(255)      not null
#  url               :text(65535)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  category_id       :bigint
#
# Indexes
#
#  index_articles_on_category_id  (category_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#

require 'rails_helper'

RSpec.describe Article, type: :model do
  let(:title) { 'Test title' }
  let(:content) { 'Test Content' }
  let(:category) { create(:category) }

  shared_examples(:validation_error) do
    it {
      article = build(:article, title: title, content: content, category: category)
      expect(article.save).to be_falsey  
    }
  end


  describe "バリデーションのテスト" do
    context 'when title is blank' do 
      let(:title) { '' }
      it_behaves_like :validation_error
    end

    context 'when content is blank' do 
      let(:content) { '' }
      it_behaves_like :validation_error
    end

    it('カテゴリがnilだとエラー') {
      article = build(:article, category_id: nil)
      expect(article.save).to be_falsey
      expect(article.errors[:category]).to eq(['must exist'])
    }
  end
end
