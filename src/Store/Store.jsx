import React, { useState } from 'react';
import IconSwitch from './IconSwitch/IconSwitch'
import CardsView from './CardsView/CardsView'
import ListView from './ListView/ListView'

const Store = ({ products }) => {
    let [icon, setIcon] = useState(true);
    
    function onSwitch () {
            //icon = !icon
            console.log(icon)
        setIcon(icon = !icon)
    }

    const list = [<div className='Store'>
            <IconSwitch icon={icon} onSwitch={() =>onSwitch()} />
            <ListView items={products} />
        </div>]
    
    
    const cards = 
        [<div className='Store'>
            <IconSwitch icon={icon} onSwitch={() => onSwitch()} />
            <CardsView cards={products} />    
        </div>]

    let viewStore

    if (icon) {
        viewStore = list;
    } else {
        viewStore =cards
    }

    return (
       viewStore
    )
}



export default Store;