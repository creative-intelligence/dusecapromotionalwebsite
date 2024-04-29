import React from "react";
import Navbar from "../layouts/Navbar";
import Desk from "../components/Desk";
import Faq from "../layouts/Faq";

import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="font-roboto">
        <Navbar />
        <Desk />
        <Faq/>
        <Footer />
      </div>
    </>
  );
};

export default Home;
