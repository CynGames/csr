import React from 'react'
import Box from '@mui/material/Box';
import {ToggleButtonGroup, ToggleButton} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {updatePaymentMethod} from '../../../../reducers/paymentReducer';

const PaymentButtons = () => {
    const dispatch = useDispatch();
    const payment = useSelector((state: any) => state.payment)

    const handlePayment = (_event: React.MouseEvent<HTMLElement>, newPayment: string | null) => {
        if (newPayment !== null) {
            dispatch(updatePaymentMethod(newPayment));
        }
    };

    return (
        <Box sx={{
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
            minWidth: 300,
            mb: 1.5
        }}>
            <ToggleButtonGroup
                sx={{display: "flex", flexBasis: 1}}
                value={payment.metodo}
                exclusive
                onChange={handlePayment}
            >
                <ToggleButton
                    value="efectivo"
                    sx={{fontFamily: "Helvetica Nue", color: "black", flexGrow: 1}}
                >
                    Efectivo
                </ToggleButton>
                <ToggleButton
                    value="debito"
                    sx={{fontFamily: "Helvetica Nue", color: "black", flexGrow: 1}}
                >
                    Debito
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>

    )
}

export default PaymentButtons