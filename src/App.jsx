/*


[x] View the optimal layout for each page depending on their device's screen size
[x] See hover states for all interactive elements on the page
[] See their own IP address on the map on the initial page load
[] Search for any IP addresses or domains and see the key information and location

*/
import { useState, useEffect } from "react";
import Search from "./components/Search";
import DisplayInfo from "./components/DisplayInfo";
import DisplayLocation from "./components/DisplayLocation";

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

  useEffect(() => {
    const getIpInfo = async () => {
      try {
        const res = await fetch(`/api/getIpInfo`, {
          method: "GET",
        });
        const ipInfo = await res.json();
        console.log(ipInfo);
      } catch (error) {
        console.log(error);
      }
    };

    getIpInfo();
  }, []);

  // Helper function ensuring the inputted value is a valid IP Address
  function ValidateIPaddress(ipaddress) {
    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        ipaddress
      )
    ) {
      return true;
    }
    alert("You have entered an invalid IP address!");
    return false;
  }

  // Populate our userData object with the inputted ip address
  const handleSearchChange = (e) => {
    e.preventDefault();

    ValidateIPaddress(e.target.firstChild.value)
      ? setUserData({
          ...userData,
          ipAddress: e.target.firstChild.value,
        })
      : alert("You have entered an invalid IP address!");
  };

  return (
    <>
      <section className="min-h-screen flex flex-col justify-start items-center font-serif bg-red-300">
        {/* Search Component */}
        <section className="relative w-full flex flex-col justify-center items-center">
          <Search handleSearchChange={handleSearchChange} />
          <DisplayInfo userData={userData} />
          <DisplayLocation />
        </section>
      </section>
    </>
  );
}
export default App;
