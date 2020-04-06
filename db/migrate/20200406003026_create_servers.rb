class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.integer :admin_id, null: false
      t.boolean :public
      t.string :image_url 
      t.timestamps
    end
    add_index :servers, :name, unique: true
    add_column :users, :image_url, :string
  end
end
