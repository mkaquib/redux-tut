import React from 'react';
import cartImg from '../assets/cartimg.jpg';

const Header = (props)=>{
    console.warn("header",props.data)
    return(
        <div>
             <div className='add-to-cart'>
            <span className='cart-count'>{props.data.length}</span>
                <img src={cartImg} />
            </div>
        </div>
    )
}
export default Header