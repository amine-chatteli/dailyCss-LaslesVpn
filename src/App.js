import FeaturesSection from "./components/FeaturesSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
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
    </div>
  );
}

export default App;
