function DisplayInfo() {
  return (
    <section className=" absolute top-40 max-w-xl xl:max-w-4xl px-10 py-8 mt-22 rounded-xl bg-white w-10/12 shadow-xl text-veryDarkGray">
      <ul className="flex flex-col justify-center items-center space-y-5">
        <li>
          <span>Ip Address</span>
          <p>192.212.174.101</p>
        </li>
        <li>
          <span>Location</span>
          <p>Brooklyn, NY 10001</p>
        </li>
        <li>
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
