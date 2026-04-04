import { useState } from "react";
import { ControlOption } from "../types/navigation";
import MainControls from "./Controls/MainControls";

export default function Controls() {
  const [activeOption, setActiveOption] = useState<ControlOption>("None");

  switch (activeOption) {
    case "None":
      return <MainControls setActiveOption={setActiveOption} />;
    case "BlockSites":
      return (
        <main className="p-[20px] h-tab-height text-text-muted overflow-y-scroll">Block sites</main>
      );
    case "TabsCount":
      return (
        <main className="p-[20px] h-tab-height text-text-muted overflow-y-scroll">Tabs count</main>
      );
    case "ScrollingLimit":
      return (
        <main className="p-[20px] h-tab-height text-text-muted overflow-y-scroll">Scroll limit</main>
      );
    case "YouTube":
      return (
        <main className="p-[20px] h-tab-height text-text-muted overflow-y-scroll">YouTube</main>
      );
    case "Facebook":
      return (
        <main className="p-[20px] h-tab-height text-text-muted overflow-y-scroll">Facebook</main>
      );
    case "Twitter":
      return (
        <main className="p-[20px] h-tab-height text-text-muted overflow-y-scroll">Twitter</main>
      );
    case "TikTok":
      return (
        <main className="p-[20px] h-tab-height text-text-muted overflow-y-scroll">TikTok</main>
      );
    case "Instagram":
      return (
        <main className="p-[20px] h-tab-height text-text-muted overflow-y-scroll">Instagram</main>
      );
    case "LinkedIn":
      return (
        <main className="p-[20px] h-tab-height text-text-muted overflow-y-scroll">LinkedIn</main>
      );
    case "Pinterest":
      return (
        <main className="p-[20px] h-tab-height text-text-muted overflow-y-scroll">Pinterest</main>
      );
    case "BlockByDomain":
      return (
        <main className="p-[20px] h-tab-height text-text-muted overflow-y-scroll">Block by domain</main>
      );
    case "ImportExportSettings":
      return (
        <main className="p-[20px] h-tab-height text-text-muted overflow-y-scroll">Import/export settings</main>
      );
    case "ResetSettings":
      return (
        <main className="p-[20px] h-tab-height text-text-muted overflow-y-scroll">Reset settings</main>
      );
    default:
      return (
        <main className="p-[20px] h-tab-height text-text-muted overflow-y-scroll">Invalid option</main>
      );
  }
}
