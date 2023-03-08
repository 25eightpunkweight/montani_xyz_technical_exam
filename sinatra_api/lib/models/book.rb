class Book < ActiveRecord::Base
    validates :title, presence: true
    validates :isbn_13, presence: true, uniqueness: true
    validates :price, presence: true
    validates :year_published, presence: true

    belongs_to :publisher

    has_and_belongs_to_many :authors, join_table: 'authors_books'
    validates :authors, presence: true
end