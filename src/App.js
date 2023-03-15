import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

function App() {
  const content = "hello";
  return (
    <div class="main">
      <Header />

      <Body />

      <Footer />
    </div>
  );
}

export default App;
