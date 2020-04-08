class CreateDirectMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :direct_messages do |t|
        t.string :body, null: false
        t.integer :author_id, null: false
        t.integer :receiver_id, null: false
        t.timestamps
    end
    add_index :direct_messages, :author_id
    add_index :direct_messages, :receiver_id
  end
end
