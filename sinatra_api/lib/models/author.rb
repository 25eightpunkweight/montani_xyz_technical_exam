class Author < ActiveRecord::Base
    validates :first_name, presence: true
    validates :last_name, presence: true

    # has_many :authors_books
    has_and_belongs_to_many :books, join_table: 'authors_books'
end