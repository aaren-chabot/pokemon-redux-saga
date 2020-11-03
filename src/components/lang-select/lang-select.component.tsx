import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setLocale, selectCurrentLocale } from '../../state/locale';
import { LangSelectEl, LangOptionEl } from './lang-select.styles';
 
export const LangSelect = () => {
  const dispatch = useDispatch();
  const lang = useSelector(selectCurrentLocale);

   const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
    console.log('test', event.target.value);
    dispatch(setLocale(event.target.value));
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
