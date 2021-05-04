import React from 'react';
import ShopItem from './ShopItem/ShopItem'


const ListView = ({items}) => {
    return (
        <div className='ListView'>
            
            {items.map((item, i) => {
                return (
                     <ShopItem item={item} key={i}/> 
                     )

            })}
           
        </div>

    )
}

export default ListView;