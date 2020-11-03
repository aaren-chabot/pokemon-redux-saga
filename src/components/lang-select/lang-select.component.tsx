import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import { LangSelectEl, LangOptionEl } from './lang-select.styles';
 
export const LangSelect = () => {
  // const dispatch = useDispatch();
  // const lang = useSelector();
  const lang = 'en';

   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log('test', event.target.value)
  };

  return (
    <> 
      <LangSelectEl
        onChange={handleChange}
        value={lang}
      >
        <LangOptionEl value="en">En</LangOptionEl>
        <LangOptionEl value="fr">Fr</LangOptionEl>
      </LangSelectEl>
    </> 
  );
};
