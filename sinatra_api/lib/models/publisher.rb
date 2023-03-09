class Publisher < ActiveRecord::Base
    # Should always have a name.
    validates :name, presence: true

    # Can have many books.
    has_many :books
end