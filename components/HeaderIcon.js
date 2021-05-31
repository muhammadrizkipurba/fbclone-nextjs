const HeaderIcon = ({ Icon, active }) => {
  return (
		<div className={`border-b-4 border-transparent ${active && 'border-blue-500 rounded-sm'}`}>
			<div className={`cursor-pointer flex rounded-xl items-center md:px-10 sm:h-14 ${active ? 'hover:bg-transparent' : 'hover:bg-gray-100'}`}>
				<Icon className={`h-5 text-center sm:h-7 mx-auto ${active && 'text-blue-500'}`} />
			</div>
		</div>
  );
};

export default HeaderIcon;