import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function Footer() {
  return (
    <footer className="bg-white p-[15px_20px] flex justify-evenly items-center">
      <button className='text-[#666] cursor-pointer'>
        <FontAwesomeIcon icon={['fas', 'calendar']} />
      </button>
      <button className='text-[#666] cursor-pointer'>
        <FontAwesomeIcon icon={['fas', 'check']} />
      </button>
      <button className='cursor-pointer text-white flex justify-center items-center w-[35px] h-[35px] bg-[#32f461] rounded-full'>
        <FontAwesomeIcon icon={['fas', 'house']} />
      </button>
      <button className='text-[#666] cursor-pointer'>
        <FontAwesomeIcon icon={['fas', 'clock']} />
      </button>
      <button className='text-[#666] cursor-pointer'>
        <FontAwesomeIcon icon={['fas', 'gear']} />
      </button>
    </footer>
  );
}
