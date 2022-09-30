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
      postalCode: "94043",
      timezone: "-07:00",
    },
    isp: "Google LLC",
  });

  const [postIpAddress, setPostIpAddress] = useState(null);

  const [loading, setLoading] = useState(true);

  const getUserIp = async () => {
    try {
      const res = await fetch("http://localhost:5005/api/current-ip");
      const data = await res.json();
      setPostIpAddress(data.ip);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postUserIp = async (newIpAddress) => {
    try {
      if (newIpAddress !== null) {
        await fetch("http://localhost:5005/api/update-ip", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ipAddress: newIpAddress,
          }),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getCurrentUserIpInformation = async () => {
    try {
      const res = await fetch("http://localhost:5005/api/info-ip");
      const data = await res.json();
      setUserData({
        ...userData,
        ipAddress: data.ip,
        location: data.location,
        isp: data.isp,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Getting the initial information
  useEffect(() => {
    getUserIp();
    postUserIp(postIpAddress);
    getCurrentUserIpInformation();
    setLoading(false);
  }, []);

  // Populate our userData object with the inputted ip address
  const handleSearchChange = (e) => {
    e.preventDefault();

    if (ValidateIPaddress(e.target.firstChild.value)) {
      setPostIpAddress(e.target.firstChild.value);
    } else {
      alert("You have entered an invalid IP address!");
      // Replace with react toastify error
    }
    postUserIp(postIpAddress);
    getCurrentUserIpInformation();
    setLoading(false);
  };

  if (loading || userData.ipAddress === "8.8.8.8") {
    return <Spinner />;
  }

  return (
    <>
      <section className="min-h-screen flex flex-col justify-start items-center font-serif bg-white">
        {/* Search Component */}
        <section className="relative w-full flex flex-col justify-center items-center">
          <Search handleSearchChange={handleSearchChange} />
          <DisplayInfo userData={userData} />
          {userData.ipAddress === postIpAddress && (
            <DisplayLocation userData={userData} />
          )}
        </section>
      </section>
    </>
  );
}
export default App;
