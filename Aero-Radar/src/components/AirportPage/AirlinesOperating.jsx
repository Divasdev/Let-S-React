import aeroplaneImg from "../../assets/airplane.png";



export function AirlinesOperating() {

  const carrierAirlines = [
    {
      id: 1,
      icon: aeroplaneImg,
      name: "United",
      routeNo: "86",
      otp: "92%",
      
    },
    {

      id: 2,
      icon: aeroplaneImg,
      name: "Delta",
      routeNo: 42,
      otp: "88%",
    },
    {
      id: 3,
      icon: aeroplaneImg,
      name: "American",
      routeNo: 38,
      otp: "91%",
    },
    {
      id: 4,
      icon: aeroplaneImg,
      name: "Southwest",
      routeNo: 35,
      otp: "90%",
    },
    {
      id: 5,
      icon: aeroplaneImg,
      name: "Alaska",
      routeNo: 30,
      otp: "94%"

    },
    {
      
      id: 5,
      icon: aeroplaneImg,
      name: "Alaska",
      routeNo: 30,
      otp: "94%"

    
    }
  ]

  return (

    <section className="px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <p className="font-light text-gray-400">CARRIERS</p>

        <h2 className="font-bold text-2xl">Airlines Operating Here</h2>

        <div className="flex gap-4 mt-6 overflow-x-auto pb-2 scrollbar-hide">
        {carrierAirlines.map((airline) => (
          <div
            key={airline.id}
           className="shrink-0 w-45 rounded-4xl border border-gray-200 shadow-lg hover:border-blue-500 hover:shadow-xl transition-all duration-300 p-5 flex justify-center flex-col items-center"



          >
            <img src={airline.icon} alt={airline.name} 
            className="w-20 rounded-full border-2 border-gray-300 p-2"/>

            <h3 className="font-semibold font-sans text-2xl">{airline.name}</h3>

            <p className="text-sm font-semibold text-gray-600 ">{airline.routeNo} routes</p>

            <span className="text-green-300 rounded-4xl p-2 bg-gray-50 font-mono font-medium">OTP • {airline.otp}</span>
          </div>
        ))}
        </div>
      </div>
    </section>

  )
}
