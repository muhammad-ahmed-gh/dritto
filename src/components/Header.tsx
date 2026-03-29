export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white h-[55px] px-[20px] border-b border-[#eee]">
      <img className="w-[100px]" src="/icons/dritto-logo-light.png" alt="dritto-logo" />
      <button type="button">
        <i className="fa-solid fa-circle-info text-[#777] cursor-pointer"></i>
      </button>
    </header>
  );
}
