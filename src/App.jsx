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
import { publicIpv4 } from "public-ip";
import Spinner from "./components/Spinner";

function App() {
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

  const [userData, setUserData] = useState({
    ipAddress: "8.8.8.8",
    location: {
      country: "US",
      region: "California",
      city: "Mountain View",
      lat: 37.40599,
      lng: -122.078514,
      timezone: "-07:00",
    },
    isp: "Google LLC",
  });

  const [queryIpAddress, setQueryIpAddress] = useState("");
  let envApiKey = import.meta.env.VITE_API_KEY;

  // Use effect that only runs on first load (getting the ip address)
  const fetchUserIp = async () => {
    try {
      const data = await publicIpv4();
      setQueryIpAddress(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Use effect that runs every time we change the ip adress
  useEffect(() => {
    const getIpInfo = async () => {
      try {
        const res = await fetch(
          `https://api.apilayer.com/ip_to_location/${queryIpAddress}`,
          {
            headers: {
              apikey: envApiKey,
            },
          }
        );
        const data = await res.json();
        setUserData((prevState) => ({
          ...prevState,
          ipAddress: data.ip,
          location: {
            country: data.country_code,
            region: data.region_name,
            city: data.city,
            lat: data.latitude,
            lng: data.longitude,
            timezone: data.timezones[0],
          },
          isp: data.connection.isp,
        }));
      } catch (error) {
        console.trace(error);
      }
    };
    if (queryIpAddress !== "") {
      getIpInfo();
    }
  }, [queryIpAddress]);

  // Populate our userData object with the inputted ip address
  const handleSearchChange = (e) => {
    e.preventDefault();

    ValidateIPaddress(e.target.firstChild.value)
      ? setQueryIpAddress(e.target.firstChild.value)
      : alert("You have entered an invalid IP address!");
  };

  const getUserIp = async (e) => {
    e.preventDefault();
    fetchUserIp();
  };

  return (
    <>
      <section className="min-h-screen flex flex-col justify-start items-center font-serif bg-red-300">
        {/* Search Component */}
        <section className="relative w-full flex flex-col justify-center items-center">
          <Search
            handleSearchChange={handleSearchChange}
            getUserIp={getUserIp}
          />
          <DisplayInfo userData={userData} />
          <DisplayLocation userData={userData} />
        </section>
      </section>
    </>
  );
}
export default App;
