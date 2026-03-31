import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white h-[50px] px-[20px] border-b border-[#eee]">
      <h1 className='italic select-none cursor-pointer font-bold text-[#666] text-[17px]'>
        Dritto
      </h1>
      <button type="button" className='text-[#666] cursor-pointer text-[14px]'>
        About
      </button>
    </header>
  );
}
