import "./App.scss";
import Footer from "./components/footer/footer.component";
import MainInfo from "./components/main-info/main-info.component";
import Header from "./components/header/header.component";

const App = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <MainInfo />
      <Footer />
    </div>
  );
};

export default App;
