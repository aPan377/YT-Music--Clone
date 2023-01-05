import NavBar from "./components/NavBar";
import Trending from "./components/Trending";
import Recommended from "./components/Recommended";
import Artists from "./components/Artists";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black">
      {/* NavBar */}
      <NavBar />
      {/* Trending */}
      <Trending />
      {/* Recommended */}
      <Recommended />
      {/* Artists */}
      <Artists />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
