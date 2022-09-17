import * as React from 'react';
import { Box } from '@mui/system';
import Contribution from './Contribution';
import Personal from './Personal';

const FormFieldHolder = () =>
{
  return (
    <Box sx={{
      display: "flex",
      alignContent: "center",
      flexDirection: "column",
      minWidth: 300
    }}>

      <Contribution />
      <Personal />
    </Box >
  );
}

export default FormFieldHolder