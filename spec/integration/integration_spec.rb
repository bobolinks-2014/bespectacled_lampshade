require 'spec_helper'
# require 'selenium-client'

feature 'initial view' do

  before do 
    Car.create!(make: "Fisker", model: "Karma")
    Car.create!(make: "Ferrari", model: "308", year: 1985)
  end

  context "on landing page" do
    it "should see a text field for home address input" do
      visit root_path
      expect(page).to have_css('input[type="text"][name="starting_point"]')
    end

    it "should see a text field for destination address input" do
      visit root_path
      expect(page).to have_css('input[type="text"][name="destination"]')
    end

    it "should see a drop down for make of vehicle" do
      visit root_path
      expect(page).to have_css('select[name="make"]')
    end

    it "should see a drop down for model with single default option 'Model'" do
      visit root_path
      expect(page).to have_select('model', options: ["Model"])
    end

    it "should see a drop down for year of vehicle with single default option 'Year'" do
      visit root_path
      expect(page).to have_select('year', options: ["Year"])
    end

    it "should populate 'model' dropdown with appropriate models after make is selected", :js => true do
      visit root_path
      select "Fisker", from: 'make'
      expect(page).to have_select('model', options: ["Karma"])
    end

    it "should populate 'model year' dropdown with appropriate years after model is selected", :js => true do
      visit root_path
      select "Ferrari", from: 'make'
      expect(page).to have_select('model', options: ["308"])
      select "308", from: 'model'
      expect(page).to have_select('year', options: [1985])
    end

    it "should see a drop down for year of vehicle enabled after model is selected" do
      pending
    end
     it "can hit submit button after information has been obtained" do
      pending
    end
  end
end

feature 'final view' do
  context "after user submitted information on landing page" do
    it "should see a table of information displaying cost information" do
    end
  end
end
















