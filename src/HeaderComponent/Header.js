import { setBackgroundColor, setFontColor, setIcon } from '../utils/modeSetters';

const Header = ({ modeColor }) => {
  return (
    <div className={`${setBackgroundColor(modeColor)} py-1`}>
      <div
        className={`max-w-[1024px] m-auto flex justify-between align-middle ${setFontColor(
          modeColor
        )}`}
      >
        <h1 className="py-4 ml-1 font-bold">Where In The World?</h1>
        <div className="flex py-4 mr-1 hover:cursor-pointer">
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
