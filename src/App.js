import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NetworkSection from "./components/NetworkSection";
import PricingSection from "./components/PricingSection";
import ReviewsSection from "./components/ReviewsSection";
import Statistics from "./components/Statistics";
import GlobalStyle from "./components/styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Statistics />
      <FeaturesSection />
      <PricingSection />
      <NetworkSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}

export default App;
