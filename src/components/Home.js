import React from 'react';
import iphoneimg from '../assets/iphoneimg.jpg';
import cartImg from '../assets/cartimg.jpg';
const Home = ()=>{
    return (
        <div>
            <div className='add-to-cart'>
                <img src={cartImg} />
            </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src={iphoneimg} />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        I-phone
                    </span>
                    <span>
                        Price: $1000
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home