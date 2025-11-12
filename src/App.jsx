import Parallax from "./components/Parallax/Parallax";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#484848] overflow-x-hidden w-full">
        {/* Parallax */}
        <section className="pb-8 md:pb-8">
          <Parallax />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
