import React from 'react';
import iphoneimg from '../assets/iphoneimg.jpg';
import cartImg from '../assets/cartimg.jpg';
const Home = (props)=>{
    console.log("Home props",props.data);
    return (
        <div>
            {/* <div className='add-to-cart'>
            <span className='cart-count'>{props.data.length}</span>
                <img src={cartImg} />
            </div> */}
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src={iphoneimg} />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        I-phone 12 pro
                    </span>
                    <span>
                        Price: $1000
                    </span>
                </div>
                <div >
                    <button onClick={()=>props.addToCartHandler({price:1000,name:'Iphone 12 pro'})}>Add To Cart</button>
                    <button onClick={()=>props.removeToCartHandler()}>Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home