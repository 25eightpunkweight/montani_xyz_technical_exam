class Author < ActiveRecord::Base
    # should always have a first name and a last name
    validates :first_name, presence: true 
    validates :last_name, presence: true

    has_and_belongs_to_many :books, join_table: 'authors_books'
end