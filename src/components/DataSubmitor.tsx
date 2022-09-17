import React from 'react'
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

const DataSubmitor = () =>
{
  const state = useSelector((state: any) => state)

  return (
    <Box sx={{
      display: "flex",
      alignContent: "center",
      flexDirection: "column",
      minWidth: 300
    }}>
      <Button
        // disabled={submitting}
        onClick={() => console.log(state)}
        variant="contained"
        sx={{ fontFamily: "Helvetica Nue", color: "white" }}
      >
        {/* {submitting ? 'Enviando Mensage...' : "Enviar"} */}
        Enviar Datos
      </Button>
    </Box>
  )
}

export default DataSubmitor