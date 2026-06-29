import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentContainer from "../ui/ContentContainer";
import {
  faChevronLeft,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useAppData } from "../../hooks/useAppData";
import ToggleButton from "../ui/ToggleButton";
import { useActiveSection } from "../../hooks/useActiveSection";
import clsx from "clsx";

export default function BlockSitesSection() {
  const appData = useAppData();
  const activeSection = useActiveSection();

  const handleEnableClick = () => {
    appData.setValue({
      ...appData.value,
      userSettings: {
        ...appData.value.userSettings,
        blockSites: {
          ...appData.value.userSettings.blockSites,
          enabled: !appData.value.userSettings.blockSites.enabled,
        },
      },
    });
  };

  const handleBackButton = () => {
    activeSection.setValue("Home");
  };

  const handleAddBlockedUrl = (formData: FormData) => {
    const url = formData.get("blockedUrl")?.toString().trim();
    if (!url) return;

    if (url !== "" && !data.blockedUrls.includes(url))
      appData.setValue({
        ...appData.value,
        userSettings: {
          ...appData.value.userSettings,
          blockSites: {
            ...appData.value.userSettings.blockSites,
            blockedUrls: [
              ...appData.value.userSettings.blockSites.blockedUrls,
              url,
            ],
          },
        },
      });
  };

  const handleRemoveBlockedUrl = (url: string) => {
    appData.setValue({
      ...appData.value,
      userSettings: {
        ...appData.value.userSettings,
        blockSites: {
          ...appData.value.userSettings.blockSites,
          blockedUrls: data.blockedUrls.filter((value) => value !== url),
        },
      },
    });
  };

  const handleAddBlockedDomain = (formData: FormData) => {
    const domain = formData.get("blockedDomain")?.toString().trim();
    if (!domain) return;

    if (domain !== "" && !data.blockedDomains.includes(domain))
      appData.setValue({
        ...appData.value,
        userSettings: {
          ...appData.value.userSettings,
          blockSites: {
            ...appData.value.userSettings.blockSites,
            blockedDomains: [
              ...appData.value.userSettings.blockSites.blockedDomains,
              domain,
            ],
          },
        },
      });
  };

  const handleRemoveBlockedDomain = (domain: string) => {
    appData.setValue({
      ...appData.value,
      userSettings: {
        ...appData.value.userSettings,
        blockSites: {
          ...appData.value.userSettings.blockSites,
          blockedDomains: data.blockedDomains.filter((value) => value !== domain),
        },
      },
    });
  };

  const handleAddWhitelistItem = (formData: FormData) => {
    const item = formData.get("whitelistItem")?.toString().trim();
    if (!item) return;

    if (item !== "" && !data.whitelist.includes(item))
      appData.setValue({
        ...appData.value,
        userSettings: {
          ...appData.value.userSettings,
          blockSites: {
            ...appData.value.userSettings.blockSites,
            whitelist: [
              ...appData.value.userSettings.blockSites.whitelist,
              item,
            ],
          },
        },
      });
  };

  const handleRemoveWhitelistItem = (item: string) => {
    appData.setValue({
      ...appData.value,
      userSettings: {
        ...appData.value.userSettings,
        blockSites: {
          ...appData.value.userSettings.blockSites,
          whitelist: data.whitelist.filter((value) => value !== item),
        },
      },
    });
  };

  const handleBlockAll = () => {
    appData.setValue({
      ...appData.value,
      userSettings: {
        ...appData.value.userSettings,
        blockSites: {
          ...appData.value.userSettings.blockSites,
          blockAll: !appData.value.userSettings.blockSites.blockAll,
        },
      },
    });
  };

  const data = appData.value.userSettings.blockSites;

  return (
    <ContentContainer>
      <div className="flex justify-between items-center">
        <div className="flex gap-[5px] items-center text-text-dark">
          <span className="cursor-pointer" onClick={handleBackButton}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          <h2 className="font-bold">Block Sites</h2>
        </div>
        <ToggleButton
          on={appData.value.userSettings.blockSites.enabled}
          handleClick={handleEnableClick}
        />
      </div>

      <div
        className={clsx(
          "my-[25px] text-text-muted flex flex-col gap-[10px]",
          !data.enabled && "pointer-events-none opacity-45",
        )}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddBlockedUrl(new FormData(e.currentTarget));
            e.currentTarget.reset();
          }}
          className="bg-[#ceeaef] p-[10px] rounded-[10px]"
        >
          <p>Blocked URLs</p>
          <ul className="mt-[5px]">
            {data.blockedUrls.map((url) => (
              <li
                key={url}
                className="flex justify-between items-center py-[6px] not-[:last-child]:border-b-1 border-b-[#bed6f5]"
              >
                <span>{url}</span>
                <FontAwesomeIcon
                  icon={faCircleMinus}
                  className="cursor-pointer"
                  onClick={() => handleRemoveBlockedUrl(url)}
                />
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="e.g. https://facebook.com"
            name="blockedUrl"
            className="block w-full bg-white mt-[15px] px-[10px] py-[5px] rounded-[10px] text-[14px] text-text-dark outline-none "
          />
        </form>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddBlockedDomain(new FormData(e.currentTarget));
            e.currentTarget.reset();
          }}
          className="bg-[#ceeaef] p-[10px] rounded-[10px]"
        >
          <p>Blocked Domains</p>
          <ul className="mt-[5px]">
            {data.blockedDomains.map((domain) => (
              <li
                key={domain}
                className="flex justify-between items-center py-[6px] not-[:last-child]:border-b-1 border-b-[#bed6f5]"
              >
                <span>{domain}</span>
                <FontAwesomeIcon
                  icon={faCircleMinus}
                  className="cursor-pointer"
                  onClick={() => handleRemoveBlockedDomain(domain)}
                />
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="e.g. facebook.com"
            name="blockedDomain"
            className="block w-full bg-white mt-[15px] px-[10px] py-[5px] rounded-[10px] text-[14px] text-text-dark outline-none "
          />
        </form>

        <div className="flex justify-between items-center bg-[#ceeaef] p-[10px] rounded-[10px]">
          <p>Block all sites</p>
          <ToggleButton on={data.blockAll} handleClick={handleBlockAll} />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddWhitelistItem(new FormData(e.currentTarget));
            e.currentTarget.reset();
          }}
          className="bg-[#ceeaef] p-[10px] rounded-[10px]"
        >
          <p>Whitelist</p>
          <ul className="mt-[5px]">
            {data.whitelist.map((item) => (
              <li
                key={item}
                className="flex justify-between items-center py-[6px] not-[:last-child]:border-b-1 border-b-[#bed6f5]"
              >
                <span>{item}</span>
                <FontAwesomeIcon
                  icon={faCircleMinus}
                  className="cursor-pointer"
                  onClick={() => handleRemoveWhitelistItem(item)}
                />
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="e.g. facebook.com"
            name="whitelistItem"
            className="block w-full bg-white mt-[15px] px-[10px] py-[5px] rounded-[10px] text-[14px] text-text-dark outline-none "
          />
        </form>
      </div>
    </ContentContainer>
  );
}
