class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.integer :year
      t.float :city08U
      t.float :highway08U

      t.timestamps
    end
  end
end
