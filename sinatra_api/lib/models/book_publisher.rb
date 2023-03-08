class BookPublishers < ActiveRecord::Base
    belongs_to :publisher
    belongs_to :book
end