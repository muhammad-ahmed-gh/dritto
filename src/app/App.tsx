import { Content } from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "/src/styles/index.css";
import { ActiveTabContextProvider } from "../providers/ActiveTabProvider";
import { ActiveSubTabProvider } from "../providers/ActiveSubTabProvider";
import { UIDataProvider } from "../providers/UIDataProvider";
import { UserDataProvider } from "../providers/UserDataProvider";

function App() {
  return (
    <UIDataProvider>
      <UserDataProvider>
        <ActiveTabContextProvider>
          <ActiveSubTabProvider>
            <Header />
            <Content />
            <Footer />
          </ActiveSubTabProvider>
        </ActiveTabContextProvider>
      </UserDataProvider>
    </UIDataProvider>
  );
}

export default App;
