feature 'directions display' do
  before do
    Car.create!(make: "Acura", model: "TL", year: "2007")
    visit root_path
    fill_in("starting_point", with: "351 W. Hubbard, Chicago IL")
    fill_in('destination', with: "633 Folsom Street, San Francisco, CA")
    select "Acura", from: 'make'
    select "TL", from: 'model'
    select "2007", from: 'year'
    click_button("submit")
  end
  context 'after user submitted information on landing page' do
    it 'should see a panel with google directions' do
      expect(page).to have_css('div.adp')
    end

    it 'should see fare costs' do
      expect(page).to have_content("Fare Cost")
    end

    it 'should see monthly cost' do
      expect(page).to have_content("Monthly Cost")
    end

    it 'should see yearly cost' do
      expect(page).to have_content("Yearly Cost")
    end

    it 'should see a warning' do
      expect(page).to have_content("This feature is in beta")
    end
  end
