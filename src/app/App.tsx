import { useState } from "react";
import { Content } from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "/src/styles/index.css";

import { SubTab, MainTab } from "../types/navigation";

function App() {
  const [activeTab, setActiveTab] = useState<MainTab>("Home");
  const [activeSubTab, setActiveSubTab] = useState<SubTab>("None");

  return (
    <>
      <Header
        setActiveSubTab={setActiveSubTab}
        activeSubTab={activeSubTab}
        setActiveTab={setActiveTab}
      />
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
    </>
  );
}

export default App;
