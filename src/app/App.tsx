import { Content } from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "/src/styles/index.css";
import { ActiveSectionProvider } from "../providers/ActiveSectionProvider";
// import { AppDataProvider } from "../providers/AppDataProvider";

function App() {
  return (
    // <AppDataProvider>
      <ActiveSectionProvider>
        <Header />
        <Content />
        <Footer />
      </ActiveSectionProvider>
    // </AppDataProvider>
  );
}

export default App;
