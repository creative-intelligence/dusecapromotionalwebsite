import Navbar from "../layouts/Navbar";
import Desk from "../components/Desk";
import Footer from "../components/Footer/Footer";
// import "../Styles/Home.css"

const Home = () => {
  return (
    <>
      <div className="font-roboto">
        <Navbar />
        <Desk />
        <Footer />
      </div>
    </>
  );
};

export default Home;
