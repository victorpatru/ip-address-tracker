import Search from "./components/Search";
import DisplayInfo from "./components/DisplayInfo";

function App() {
  return (
    <section className="min-h-screen flex flex-col justify-start items-center font-serif bg-red-300">
      {/* Search Component */}
      <section className="relative w-full flex flex-col justify-center items-center space-y-6">
        <Search />
        <DisplayInfo />
      </section>

      {/* <DisplayInfo /> */}

      {/* DisplayInfo and DisplayLocation Components */}
    </section>
  );
}
export default App;
