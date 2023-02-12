import { setBackgroundColor, setFontColor, setIcon } from '../utils/modeSetters';

const Header = ({ modeColor, onChange }) => {
  const handleChange = () => onChange(modeColor);

  return (
    <div className={`text-sm p-2 ${setFontColor(modeColor)} ${setBackgroundColor(modeColor)}`}>
      <div className={`flex justify-between align-middle lg:max-w-[1024px] lg:m-auto`}>
        <h1 className="py-4 ml-4 font-bold">Where In The World?</h1>
        <div className="flex py-4 mr-4 hover:cursor-pointer" onClick={handleChange}>
          <span className="mr-1">
            <i className={`fa-solid fa-${setIcon(modeColor)}`}></i>
          </span>
          <p className="font-bold">{modeColor === 'Dark Mode' ? 'Light Mode' : 'Dark Mode'}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

// #202C37
