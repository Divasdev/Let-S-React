export function AirportSearch() {



   const airports=["JFK","LHR","DXB","HND","ATL"]
  return (

   
    <>
      <h1>Global Airport Search</h1>
      <p>Search any airport to access real-time telemetry, terminal status, and predictive delay models.</p>

      <div>

        <input placeholder="Enter Your AIport IATA code"/>

        <button>Search</button>
      </div>

      <span>Popular:</span>

      {airports.map((airport)=>(
        <button key={airport}>{airport}</button>
      ))}
      
    </>
  )
}
