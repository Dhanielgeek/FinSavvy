import FAQ from "./FAQ";
import Home from "./Home";
import HowitWrks from "./HowitWrks";
import InvestmentPlan from "./InvestmentPlan";
import Market from "./Market";
import Testimonials from "./Testimonals";

const Homepage = () => {
  return (
    <>
      <Home />
      <HowitWrks />
      <Market />
      <InvestmentPlan />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Homepage;
