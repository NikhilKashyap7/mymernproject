import React from 'react'
import Myheaderpage from './Myheaderpage';
import placement from '../images/placement.jpg';
import Cardcarousel from './Cardcarousel';
function Myplacement() {
  return (
    <>
    <Myheaderpage />
    <div>
          <img src={placement} alt='placement written' className='placement' />
    </div>
    <div>
    <h2 className='place-heading'>Placed Students</h2>
    </div>
    <Cardcarousel/>

    <div>
    <h2 className='place-heading'>Our Alumni work in Top Companies </h2>
    </div>
          </>
  )
}

export default Myplacement