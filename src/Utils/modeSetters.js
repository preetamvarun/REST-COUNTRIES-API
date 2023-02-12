export const setBackgroundColor = modeColor => {
  return modeColor === 'Dark Mode' ? 'bg-slate-700' : 'bg-white';
};

export const setFontColor = modeColor => {
  return modeColor === 'Dark Mode' ? 'text-white' : 'text-black';
};

export const setIcon = modeColor => {
  return modeColor === 'Dark Mode' ? 'sun' : 'moon';
};

export const setCountriesBackgroundColor = modeColor => {
  return modeColor === 'Dark Mode' ? 'bg-slate-800' : 'bg-[#FAFAFA]';
};
