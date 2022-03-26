import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";
import GlobalStyle from "./components/styles/GlobalStyles";


function App() {
  return (
    <div className="App">
      <GlobalStyle /> 
      <Navbar />
      <Hero />
      <Statistics />
    </div>
  );
}

export default App;
