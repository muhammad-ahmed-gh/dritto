import { useState } from "react";
import { Content } from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "/src/styles/index.css";

import {Tab} from "../types/navigation";

function App() {

  const [activeTab, setActiveTab] = useState<Tab>("Home");

  return (
    <>
      <Header setActiveTab={setActiveTab} />
      <Content activeTab={activeTab} />
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}

export default App;
