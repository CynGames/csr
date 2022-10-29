import * as React from 'react';
import { Box } from '@mui/system';
import Contribution from './1_Contribution/Contribution';
import Personal from './2_Personal/Personal';

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