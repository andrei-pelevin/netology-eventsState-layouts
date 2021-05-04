import React, { useState } from 'react';
import IconSwitch from './IconSwitch/IconSwitch'
import CardsView from './CardsView/CardsView'
import ListView from './ListView/ListView'

const Store = ({ products }) => {
    let [icon, setIcon] = useState(true);
    
    function onSwitch () {
        setIcon(icon = !icon)
    }



    if (icon) {
        return ( <div className='Store'>
        <IconSwitch icon={icon} onSwitch={() =>onSwitch()} />
        <ListView items={products} />
    </div> )
    } else {
        return (<div className='Store'>
        <IconSwitch icon={icon} onSwitch={() =>onSwitch()} />
        <CardsView cards={products} />    
    </div>)
    }

    
}



export default Store;