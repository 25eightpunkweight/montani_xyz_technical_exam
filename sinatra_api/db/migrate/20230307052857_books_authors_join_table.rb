class BooksAuthorsJoinTable < ActiveRecord::Migration[7.0]
  def change
    create_join_table :books, :authors do |t|
      t.index :book_id
      t.index :author_id
    end    
  end
end
