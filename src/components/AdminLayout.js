import React, {useContext} from 'react';
import Header from './Header';
import SubNav from './SubNav';
import {ThemeContext} from '../ThemeContext';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const AdminLayout = ({children}) => {
  const [theme, setTheme] = useContext(ThemeContext)
  return(
    <div
      style={{
        height: '100%',
        backgroundColor: theme.bodyBackgroundColor
      }}
    >
      <Header />
      <SubNav />
      <Container className="d-flex justify-content-center">
        <Col xs={8}>
          {children}
        </Col>
      </Container>
    </div>
  );
}

export default AdminLayout;