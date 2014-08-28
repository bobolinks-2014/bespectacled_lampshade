describe "calculate distance" do
  let(:distance){Google.calculate_distance("7604 w 174th ave lowell, in", "2146 w chicago ave chicago, il")}

  it 'should return a float' do
    expect(distance).to be_an_instance_of(Float)
  end

  it "should be a distnce greater than 50 miles" do
    expect(distance).to be > 50
  end
end

describe "kilometers_to_miles" do
  let(:conversion){Calculation.kilometers_to_miles(10)}
  it 'should return a float' do
    expect(conversion).to be_an_instance_of(Float)
  end
  it 'should convert kilometers to miles' do
    expect(conversion).to eq(6.21)
  end
end
