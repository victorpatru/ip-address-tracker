function DisplayInfo() {
  return (
    <section className=" absolute top-40 max-w-2xl md:max-w-4xl xl:max-w-6xl px-10 py-8 xl:py-14 mt-22 rounded-xl bg-white w-10/12 shadow-xl text-veryDarkGray">
      <ul className="flex flex-col justify-center items-center space-y-5 md:flex-row md:space-y-0 md:space-x-8 xl:space-x-10">
        <li className="md:border-r-[1px] md:pr-8">
          <span>Ip Address</span>
          <p>192.212.174.101</p>
        </li>
        <li className="md:border-r-[1px] md:pr-2 lg:pr-8">
          <span>Location</span>
          <p>Brooklyn, NY 10001</p>
        </li>
        <li className="md:border-r-[1px] md:pr-2 lg:pr-8">
          <span>Timezone</span>
          <p>UTC -05:00</p>
        </li>
        <li>
          <span>ISP</span>
          <p>SpaceX Starlink</p>
        </li>
      </ul>
    </section>
  );
}
export default DisplayInfo;
