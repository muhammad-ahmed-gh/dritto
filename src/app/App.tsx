import { useEffect, useState } from "react";
import { Content } from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "/src/styles/index.css";

import { SubTab, MainTab } from "../types/tabs";
import { loadUIData } from "../data/storage";
import { UIData } from "../types/UIData";
import { UIContext } from "../context/UIContext";
import { ActiveTabContext } from "../context/ActiveTabContext";
import { ActiveSubTabContext } from "../context/ActiveSubTabContext";

function App() {
  const [activeTab, setActiveTab] = useState<MainTab>("Home");
  const [activeSubTab, setActiveSubTab] = useState<SubTab>("None");
  const [UI, setUI] = useState<UIData | null>(null);

  useEffect(() => {
    loadUIData().then((data) => setUI(data));
  }, []);

  return (
    <UIContext.Provider value={{ value: UI, setValue: setUI }}>
      <ActiveTabContext.Provider
        value={{ value: activeTab, setValue: setActiveTab }}
      >
        <ActiveSubTabContext.Provider
          value={{ value: activeSubTab, setValue: setActiveSubTab }}
        >
          <Header />
          <Content
            activeSubTab={activeSubTab}
            setActiveSubTab={setActiveSubTab}
            activeTab={activeTab}
          />
          <Footer
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setActiveSubTab={setActiveSubTab}
          />
        </ActiveSubTabContext.Provider>
      </ActiveTabContext.Provider>
    </UIContext.Provider>
  );
}

export default App;
