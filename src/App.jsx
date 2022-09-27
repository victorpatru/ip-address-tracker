/*


[x] View the optimal layout for each page depending on their device's screen size
[x] See hover states for all interactive elements on the page
[] See their own IP address on the map on the initial page load
[] Search for any IP addresses or domains and see the key information and location

*/
import { useEffect, useState } from "react";
import Search from "./components/Search";
import DisplayInfo from "./components/DisplayInfo";

function App() {
  const [userData, setUserData] = useState({
    ipAddress: "86.121.151.191",
    location: {
      country: "RO",
      region: "Ilfov",
      city: "Chiajna",
      lat: 44.46,
      lng: 25.97333,
      postalCode: "",
      timezone: "+03:00",
      geonameId: 682159,
    },
    isp: "RCS & RDS SA",
  });

  // useEffect(() => {
  //   const getIp = async () => {
  //     const res = await fetch(`/api/getIpInfo`);
  //     const ipInfo = await res.json();
  //     console.log(ipInfo);
  //   };

  //   getIp();
  // }, []);

  // Populate our userData object with the inputted ip address
  const handleSearchChange = (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      ipAddress: e.target.firstChild.value,
    });
  };

  return (
    <section className="min-h-screen flex flex-col justify-start items-center font-serif bg-red-300">
      {/* Search Component */}
      <section className="relative w-full flex flex-col justify-center items-center space-y-6">
        <Search handleSearchChange={handleSearchChange} />
        <DisplayInfo userData={userData} />
      </section>

      {/* <DisplayInfo /> */}

      {/* DisplayInfo and DisplayLocation Components */}
    </section>
  );
}
export default App;
