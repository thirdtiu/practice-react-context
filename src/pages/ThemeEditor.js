import React, {useState, useContext} from 'react';
import ThemeEditorForm from '../components/ThemeEditorForm';
import Card from 'react-bootstrap/Card';
import {ThemeContext} from '../ThemeContext';

const ThemeEditor = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return(
    <Card 
      className="mt-5 p-3"
      style={{
        backgroundColor: theme.cardBackgroundColor
      }}
    >
      <h5 className="mb-5">Customize your Theme</h5>
      <ThemeEditorForm />
    </Card>
  );
}

export default ThemeEditor;