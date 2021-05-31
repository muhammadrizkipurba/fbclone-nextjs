import React from "react";
import Image from "next/image";
import { 
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	HomeIcon,
	UserGroupIcon,
	ViewGridIcon
} from '@heroicons/react/solid';
import { 
	FlagIcon,
	PlayIcon,
	SearchIcon,
	ShoppingCartIcon
} from '@heroicons/react/outline';
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  return (
    <div className='sticky bg-white flex items-center p-2 top-0 z-50 lg:pb-0 lg:pt-1 shadow-md'>
      {/* LEFT */}
			<div className='flex items-center lg:pb-1'>
				<Image 
					// src="https://links.papareact.com/5me"
					src="/logo.png"
					alt="Logo"
					width={40}
					height={40}
					layout="fixed"
				/>
				<div className='flex items-center ml-2 rounded-full bg-gray-100 p-3'>
					<SearchIcon className='h-6 text-gray-500' />
					<input className='flex bg-transparent items-center flex-shrink outline-none placeholder-gray-500 ml-2' type="text" placeholder="Search Facebook" />
				</div>
			</div>
      {/* CENTER */}
			<div className='flex justify-center flex-grow'>
				<div className='flex items-center space-x-6 md:space-x-2'>
					<HeaderIcon active Icon={HomeIcon} />
					<HeaderIcon Icon={FlagIcon} />
					<HeaderIcon Icon={PlayIcon} />
					<HeaderIcon Icon={ShoppingCartIcon} />
					<HeaderIcon Icon={UserGroupIcon} />
				</div>
			</div>
      {/* RIGHT */}
    </div>
  );
};

export default Header;
