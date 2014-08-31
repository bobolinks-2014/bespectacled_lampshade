require '../spec_helper'

feature 'initial view' do
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
    it "should see a drop down for model of vehicle disabled" do
      visit root_path
      expect(page).to have_css('select[name="model"]')
    end
    it "should see a drop down for year of vehicle disabled" do
      visit root_path
      expect(page).to have_css('select[name="year"]')
    end
    it "should see a drop down for year of vehicle enabled after make is selected" do
      pending
    end
    it "should see a drop down for model of vehicle disabled after make is selected" do
      pending
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
















