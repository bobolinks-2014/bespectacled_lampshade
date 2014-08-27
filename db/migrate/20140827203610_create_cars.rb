class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.integer :year
      t.integer :city_mpg
      t.integer :highway_mpg

      t.timestamps
    end
  end
end
