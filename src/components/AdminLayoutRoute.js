import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AdminLayout from './AdminLayout';

const AdminLayoutRoute = ({component: Component, ...rest}) => {
  return(
    <Route {...rest} render={matchProps => (
        <div style={{height: '100%'}}>
          <AdminLayout>
            <Component {...matchProps} />
          </AdminLayout>
        </div>
    )} />
  );
}

export default AdminLayoutRoute;