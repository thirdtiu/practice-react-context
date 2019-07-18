import React, {useState, useContext} from 'react';
import {ThemeContext} from '../ThemeContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HeaderBgColor from './theme-editor-fields/HeaderBgColor';
import BodyBgColor from './theme-editor-fields/BodyBgColor';



const ThemeEditorForm = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  
  const handleHeaderBgColorChange = (color) => {
    setTheme({...theme,'headerBackgroundColor': color})
  }

  const handleBodyBgColorChange = (color) => {
    setTheme({...theme,'bodyBackgroundColor': color})
  }


  return(
    <Form>
      <BodyBgColor bgColor={theme.bodyBackgroundColor} onBgColorchange={handleBodyBgColorChange} />
      <HeaderBgColor bgColor={theme.headerBackgroundColor} onBgColorchange={handleHeaderBgColorChange} />
      <div className="text-right">
        <Button variant="default" type="button">
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default ThemeEditorForm;