import React from 'react'
import homeImg from '../Images/fitness_stat.png'
const HomePage = () => {
  function HandleHome(){
    window.location.href = '/register'
  }
  return (
    <>
        <main>
          <section className="home">
            <div className='container'>
              <div className='home-content'>
                <h1 className='home-head'>Online Booking System for all your <br /> <span>fitness sessions</span></h1>
                <p className='home-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odit ipsum necessitatibus laboriosam, id sapiente magni quia debitis excepturi obcaecati est quam praesentium voluptate sequi tempore esse iusto neque architecto?</p>
                <button className='home-btn' onClick={HandleHome}>Get Started</button>
                <button className='home-btn-learn' onClick={()=> window.location.href='./about'}>Learn More</button>
              </div>
              <div className='home-image'>
                <img src={homeImg} alt='home' width='100%' title="fitnessApp" />
              </div>
            </div>
          </section>
        </main>
    </>
  )
}

export default HomePage