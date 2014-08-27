class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.integer :year
      t.float :city_mpg
      t.float :highway_mpg

      t.timestamps
    end
  end
end
