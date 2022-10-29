import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from '@mui/material'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {EntidadesData} from '../../../../../data/entidad';
import {Montos} from '../../../../../data/monto';
import {
    updateContributionEntidad,
    updateContributionMeses,
    updateContributionMonto
} from '../../../../../reducers/contributionDataReducer';

const Contribution = () => {
    const dispatch = useDispatch();
    const contribution = useSelector((state: any) => state.contributionData)

    const handleEntidades = (event: SelectChangeEvent) =>
        dispatch(updateContributionEntidad(event.target.value))

    const handleMonto = (event: SelectChangeEvent) =>
        dispatch(updateContributionMonto(event.target.value))

    const handleMeses = (event: React.ChangeEvent<any>) =>
        dispatch(updateContributionMeses(event.target.value))

    return (
        <Box sx={{
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
            minWidth: 300
        }}>
            <FormControl>
                <InputLabel id="demo-simple-select-helper-label" required >Entidad</InputLabel>
                <Select
                    sx={{mb: 1.5}}
                    label="Entidad"
                    value={contribution.entidad}
                    onChange={handleEntidades}
                    required
                >
                    {EntidadesData.map(
                        entidad => <MenuItem value={entidad.name} key={entidad.id}> {entidad.name} </MenuItem>
                    )}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="demo-simple-select-helper-label" required >Monto</InputLabel>
                <Select
                    sx={{mb: 1.5}}
                    label="Monto"
                    value={contribution.monto}
                    onChange={handleMonto}
                    required
                >
                    {Montos.map(monto => <MenuItem value={monto} key={monto}> {`${monto}`} </MenuItem>)}
                </Select>
            </FormControl>

            <FormControl>
                <TextField
                    required
                    id="outlined-basic"
                    name='mes'
                    label="Meses"
                    variant="outlined"
                    value={contribution.meses}
                    onChange={handleMeses}
                    sx={{mb: 1.5}}
                />
            </FormControl>
        </Box>
    )
}

export default Contribution