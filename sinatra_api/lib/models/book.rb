class Book < ActiveRecord::Base
    # Should always have a title, ISBN-13, list price, publication year, and publisher.
    validates :title, presence: true
    validates :isbn_13, presence: true, uniqueness: true
    validates :price, presence: true
    validates :year_published, presence: true

    # URL attribute validation. 
    # I will just leave this here commented since we 
    # don't have image URLs for each book at the database.
    
    # validates :url, format: { with: URI.regexp }, if: 'url.present?'

    belongs_to :publisher
    validates :publisher, presence: true

    # Must have at least one author but can have many authors.
    has_and_belongs_to_many :authors, join_table: 'authors_books'
    validates :authors, presence: true
end