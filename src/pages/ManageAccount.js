import React, {useState, useContext} from 'react';
import Card from 'react-bootstrap/Card';
import {ThemeContext} from '../ThemeContext';

const ManageAccount = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return(
    <Card 
      className="mt-5 p-3"
      style={{
        backgroundColor: theme.cardBackgroundColor
      }}
    >
      <h5 className="mb-5">Manage your account</h5>
    </Card>
  );
}

export default ManageAccount;