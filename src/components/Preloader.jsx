import React from 'react'

const Preloader = () => {
    return (
      <div id='preloader-active'>
        <div className='preloader d-flex align-items-center justify-content-center'>
          <div className='preloader-inner position-relative'>
            <div className='preloader-circle'></div>
            <div className='preloader-img pere-text'>
              <img src='/images/gym.gif' alt='Fitness gif' />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Preloader