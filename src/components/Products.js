import React from 'react'
import '../components/Product.css'
import bag from '../images/bag.jpg'
import beanbag from '../images/bean-bag.jpg'
import bottle from '../images/bottle.jpg'
import cooker from '../images/cooker.jpg'
import cooler from '../images/cooler.jpg'
import dumbell from '../images/dumbell.jpg'
import earbuds from '../images/earbuds.jpg'
import electricadapter from '../images/electric-adapter.jpg'
import farmley from '../images/farmley.jpg'
import helmet from '../images/helmet.jpg'
import induction from '../images/induction.jpg'
import kettle from '../images/kettle.jpg'
import kitchen from '../images/kitchen-dining.jpg'
import mixer from '../images/mixer-grinder.jpg'
import oneplus from '../images/oneplus.jpg'
import pots from '../images/pots.jpg'
import smartwatch from '../images/smart watch.jpg'
import waterpurifier from '../images/water-purifier.jpg'




const Products = () => {
  return (
    <div className='products'>
        <h1>Shop by category</h1>
        <div className='product-list'>
            <div className='images'>
            <img src={bag} alt='' />
            <p>Bag</p>
            </div>
            <div className='images'>
            <img src={beanbag} alt='' />
            <p> Bean bag</p>
            </div>   
            <div className='images'>
            <img src={bottle} alt='' />
            <p> Bottle</p>
            </div>
            <div className='images'>
            <img src={cooker} alt='' />
            <p>cooker</p>
            </div>
            <div className='images'>
            <img src={dumbell} alt='' />
            <p> Dumbell</p>
            </div>
            <div className='images'>
            <img src={cooler} alt='' />
            <p>cooler</p>
            </div>
            <div className='images'>
            <img src={earbuds} alt='' />
            <p>earbuds</p>
            </div>
            <div className='images'>
            <img src={electricadapter} alt='' />
            <p> Electric Adapter</p>
            </div>
            <div className='images'>
            <img src={farmley} alt='' />
            <p> Farmley</p>
            </div>
            <div className='images'>
            <img src={helmet} alt='' />
            <p> Helmet</p>
             </div>
            <div className='images'> 
            <img src={induction} alt='' className='images'/>
            <p> Induction</p>
            </div>
            <div className='images'> 
            <img src={kettle} alt='' className='images'/>
            <p> kettle</p>
                </div>
            <div className='images'> 
            <img src={kitchen} alt='' className='images'/>
            <p> Kitchen appliance</p>
            </div>
            <div className='images'> 
            <img src={mixer} alt='' className='images'/>
            <p> mixer</p>
            </div>
            <div className='images'> 
            <img src={oneplus} alt='' className='images'/>
            <p> OnePlus Nord CE 2</p>
            </div>
            <div className='images'> 
            <img src={pots} alt='' className='images'/>
            <p> Pots</p>
            </div>
            <div className='images'> 
            <img src={smartwatch} alt='' className='images'/>
            <p> Smartwatch</p>
            </div>
            <div className='images'> 
            <img src={waterpurifier} alt='' className='images'/>
            <p> Water Purifier</p>
            </div>
        </div>
    </div>
  )
}

export default Products