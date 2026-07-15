import React from "react"
import navbar from "../components/Navbar";

const featuredRooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: "₹2,500 / Night",
     image:""
  

  },
  {
    id: 2,
    name: "Executive Room",
    price: "₹3,500 / Night",
    image: "",
  },
  {
    id: 3,
    name: "Family Suite",
    price: "₹4,500 / Night",
    image: "",
  },
];

const Home = () => {
  return (
    <div className="bg-gray/60">
  <section
        className=" bg-cover  bg-center"
        style={{ backgroundImage: "url('public/hotel (1).jpg')" }}
      >
        <div className="bg-black/60 h-full flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to HotelStay
            </h1>

            <p className="text-lg max-w-2xl mx-auto mb-8">
              Experience luxury, comfort, and unforgettable hospitality.
              Book your perfect stay today.
            </p>

            <button className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-lg font-semibold transition">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Our Hotel</h2>

        <p className="text-gray-600 text-lg leading-8">
          HotelStay provides comfortable rooms, excellent service,
          delicious food, free WiFi, and a peaceful environment for
          families, couples, and business travelers.
        </p>
      </section>

      {/* Featured Rooms */}
      <section className="pd-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Rooms
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-64 object-cover"
              />

              <div className="pd-6">
                <h3 className="text-2xl font-semibold">
                  {room.name}
                </h3>

                <p className="text-yellow-600 font-bold my-3">
                  {room.price}
                </p>

                <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-5xl mb-4"></div>
            <h3 className="font-semibold text-xl">
              Luxury Rooms
            </h3>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-5xl mb-4"></div>
            <h3 className="font-semibold text-xl">
              Restaurant
            </h3>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-5xl mb-4"></div>
            <h3 className="font-semibold text-xl">
              Free WiFi
            </h3>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-5xl mb-4"></div>
            <h3 className="font-semibold text-xl">
              Parking
            </h3>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Contact Us
        </h2>

        <p className="text-lg leading-8">
         Garhdiwala, Punjab
          <br />
          +91 98765 43210
          <br />
          hotelstay@gmail.com
        </p>

        <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-lg font-semibold transition">
          Contact Now
        </button>
      </section>

    </div>
  );
};

export default Home;