function Search() {
  return (
    <header className="bg-header-image bg-fixed w-full h-60  xl:h-64 xl:bg-contain brightness-125	">
      <section className="flex flex-col justify-center items-center pt-8 space-y-8 max-w-xl mx-auto">
        <h1 className="text-white text-3xl font-medium">IP Address Tracker</h1>
        <form className="w-10/12 relative">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className="pl-6 pr-28 py-4 w-full rounded-xl placeholder:text-veryDarkGray placeholder:opacity-50 focus:outline-none md:pr-[400px] shadow-md"
          />
          <button className="absolute top-0 right-0 rounded-r-xl bg-black w-16 h-14 flex justify-center items-center">
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
