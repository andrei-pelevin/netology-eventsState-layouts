import React from 'react';
import ShopCard from './ShopCard/ShopCard'


const CardsView = ({cards}) => {
       

    return (
        <div className='CardsView d-flex flex-wrap justify-content-between'>
            {cards.map((card, i) => {
                return (
                    <ShopCard key={i} card={card} />
                )
            })}
        </div>
        
    )
}


export default CardsView;