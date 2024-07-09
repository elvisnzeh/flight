const [oneWay, setOneWay] = useState(false);
const [departureCity, setDepartureCity] = useState("");
const [destinationCity, setDestinationCity] = useState("");
const [originCity, setOriginCity] = useState("");

const handleOneWayChangeDepChange = (e) => {
  setDepartureCity(e.target.value)
};

const handleRoundTripChange = () => {
  setOneWay(false);
};

const handleSubmit = () => {
  console.log('Form submitted!');
  
};

return (
  <div className="bg-white pb-5 w-[25%] rounded-3xl absolute bottom-1 shadow shadow-gray-300">
    <div className="p-5">
      <p className="font-semibold">
        Book cheap<span className="text-yellow-400">flight</span>
      </p>
    </div>
    <div className="flex bg-black text-white justify-center py-3">
      <div className="flex">
        <input
          className="text-white"
          type="radio"
          id="oneWay"
          name="tripType"
          value="oneway"
          checked={oneWay}
          onChange={handleOneWayChange}
        />
        <p className="text-sm ml-3">One way</p>
      </div>
      <div className="flex ml-3">
        <input
          className="text-white"
          type="radio"
          id="roundTrip"
          name="tripType"
          value="roundtrip"
          checked={!oneWay}
          onChange={handleRoundTripChange}
        />
        <p className="text-sm text-yellow-400 ml-3">
          Round trip
        </p>
      </div>
    </div>
    <div className="p-5">
      <InputText
        image={<IoIosAirplane />}
        placeholder={"Enter your name"}
        label="Departure"
        value={departureCity}
        onChange={(e) => setDepartureCity(e.target.value)}
      />
      <InputText
        image={<IoIosAirplane />}
        placeholder={"Enter city name"}
        label="Destination"
        value={destinationCity}
        onChange={(e) => setDestinationCity(e.target.value)}
      />
      <InputText
        image={<IoIosAirplane />}
        placeholder={"Origin"}
        label="Origin"
        value={originCity}
        onChange={(e) => setOriginCity(e.target.value)}
        extraStyle={"mt-2"}
      />
      <button
        type="button"
        className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Book
      </button>



        {/* <Link to="flights" className="px-5" smooth={true}
        duration={500}
        >
      <ButtonYellow label={"Book"} extraStyle={"mt-5 w-full"} />
      </Link > */}