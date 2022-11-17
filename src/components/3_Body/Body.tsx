import React from 'react'

import About from './1_About/About'
import EntidadesHolder from './2_EntidadesHolder/EntidadesHolder'
import Contact from './4_Contact/Contact'
import DonationSegment from './3_DonationSegment/DonationSegment'
import {Divider} from "@mui/material";

const Body = () => {
    return (
        <>
            <About/>
            <EntidadesHolder/>
            <Divider sx={{mb: 1.5, minWidth: 120}}/>
            <DonationSegment/>
            <Divider sx={{mb: 1.5, minWidth: 120}}/>
            <Contact/>
        </>
    )
};

export default Body