import { useState } from "react";

function Search({ handleSearchChange, getUserIp }) {
  const [ipAddress, setIpAddress] = useState("");

  const handleChange = (e) => {
    setIpAddress(e.target.value);
  };

  return (
    <header className="bg-header-image bg-fixed w-full h-60  xl:h-64 xl:bg-contain brightness-125	">
      <section className="flex flex-col justify-center items-center pt-8 space-y-8 max-w-xl  md:max-w-3xl mx-auto">
        <div className="flex flex-row justify-center items-center space-x-3 text-white font-medium">
          <h1 className="text-3xl ">IP Address Tracker</h1>
          <button
            type="submit"
            className="bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={getUserIp}
          >
            Get my Ip Address
          </button>
        </div>
        <form className="w-10/12 relative" onSubmit={handleSearchChange}>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className="pl-6 pr-28 py-4 w-full rounded-xl placeholder:text-veryDarkGray placeholder:opacity-50 focus:outline-none md:pr-[400px] shadow-md cursor-pointer"
            value={ipAddress}
            onChange={handleChange}
          />
          <button className="absolute top-0 right-0 rounded-r-xl bg-black w-16 h-14 flex justify-center items-center hover:bg-[#3F3F3F]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width="27px"
              height="27px"
            >
              <path
                d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                fill="#fff"
              />
            </svg>
          </button>
        </form>
      </section>
    </header>
  );
}
export default Search;
