import React from 'react'

import About from './1_About/About'
import EntidadesHolder from './2_EntidadesHolder/EntidadesHolder'
import Contact from './4_Contact/Contact'
import DonationSegment from './3_DonationSegment/DonationSegment'

const Body = () => {
    return (
        <>
            <About/>
            <EntidadesHolder/>
            <DonationSegment/>
            <Contact/>
        </>
    )
};

export default Body