class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :isbn_13
      t.string :price
      t.string :year_published
      t.bigint :publisher_id

      t.string :img_url
      t.string :edition

      
      t.timestamps
    end
  end
end
