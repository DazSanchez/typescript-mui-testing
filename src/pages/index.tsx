import { Button } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';

export default () => (
  <>
    <Helmet>
      <title>Inicio de aplicacion</title>
    </Helmet>
    <p>Hello react</p>
    <Button variant="contained" color="primary">
      Click
    </Button>
  </>
);
