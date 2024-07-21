import React from 'react';
import Navbar from './navbar';
import Footerr from './footer';
import ExclusiveProductSection from './ExclusiveProduct';
import OnlineCakeDelivery from './onlineCakeDelivery';
import SpecialitySection from './SpecialityProduct';
function Home({cart}){
    return(
        <div>
            <Navbar cart={cart || []}/>
            <OnlineCakeDelivery/>
            <ExclusiveProductSection/>
            <SpecialitySection/>
            <Footerr/>
        </div>
    )
}

export default  Home;