import { Content } from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "/src/styles/index.css";
import { ActiveTabContextProvider } from "../providers/ActiveTabProvider";
import { ActiveSubTabProvider } from "../providers/ActiveSubTabProvider";
import { AppDataProvider } from "../providers/AppDataProvider";

function App() {
  return (
    <AppDataProvider>
      <ActiveTabContextProvider>
        <ActiveSubTabProvider>
          <Header />
          <Content />
          <Footer />
        </ActiveSubTabProvider>
      </ActiveTabContextProvider>
    </AppDataProvider>
  );
}

export default App;
