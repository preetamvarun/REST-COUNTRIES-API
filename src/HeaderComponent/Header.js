import { setBackgroundColor, setFontColor, setIcon } from '../Utils/modesetters';

const Header = ({ modeColor, onChange }) => {
  const handleChange = () => onChange(modeColor);

  return (
    <div
      className={`text-sm p-2 ${setFontColor(modeColor)} ${setBackgroundColor(modeColor)}`}
      style={{ boxShadow: '0 0 4px 3px rgb(0 0 0 / 10%)' }}
    >
      <div
        className={`flex justify-between align-middle 
        lg:max-w-[1024px] lg:m-auto xl:max-w-[1280px] 
        xl:m-auto 2xl:max-w-[1536px] 2xl:m-auto`}
      >
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
