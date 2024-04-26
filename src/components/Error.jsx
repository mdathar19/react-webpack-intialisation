import React, { useEffect, useState } from 'react';
import MeLogo from '../assets/MeLogoMain';
import MePic from '../mepic.png';
const BackGround = {
  paddingTop: '',
  background: 'rgb(0,0,0)',
  background: 'linear-gradient(245deg, rgba(0,0,0,0.9) 69%, rgba(255,0,0,1) 100%)'
};

const newButton = {
  background: 'rgb(14,0,255)',
  background: 'linear-gradient(90deg, rgba(14,0,255,1) 0%, rgba(255,0,0,1) 100%)',
  color: 'whitesmoke',
  animation: 'ease .1s',
  '&:hover': {
    background: 'rgb(14,0,255)',
    background: 'linear-gradient(245deg, rgba(14,0,255,1) 0%, rgba(255,0,0,1) 100%)',
    animation: 'ease .1s'
  },
  border: '1.5px solid #1C6DD0',
  padding: '10px',
  borderRadius:'5px'
};

const Loader = () => {
  return (
    <div className="d-flex text-white align-items-center justify-content-center flex-column" style={{ minHeight: '100vh' }}>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img src={MePic} alt="image" width="300" height="300" />
        <div>
          <marquee behavior="scroll" direction="left">
            <h2 className='text-dark'>The Global Media Marketplace</h2>
          </marquee>
        </div>
      </div>
    </div>
  );
};

const ErrorPage = () => {
    const [loading, setLoading] = useState(() => {
        if (sessionStorage.getItem('landing_count') < 1) {
            return true
        } else {
            return false
        }
    })
  const bg = { ...BackGround, padding: 0, margin: 0, textAlign: 'center', minHeight: "100vh" };
  const bgButt = { ...newButton, marginTop: "1rem" };

  useEffect(() => {
    const clr = setTimeout(() => {
        setLoading(false)
        sessionStorage.setItem('landing_count', JSON.stringify(1))
    }, 10000)
    return () => clearTimeout(clr)
}, [])

  if (loading) {
    return <Loader />
} else {
  return (
    <div style={bg}>
      <div className='container-fluid' style={{ padding: '1rem' }} >
        <h1 style={{ fontSize: '3rem', color: 'white' }}>Site Under Maintenance</h1>
        <h2 style={{ color: 'white', fontSize: '2rem' }}>We'll Be Back Soon!</h2>
        <div style={{ margin: "20px 0px" }}>
          <MeLogo />
        </div>
        <div >
          <button onClick={() => {
            alert('We are Under maintenance')
          }} variant="contained" size="large" style={bgButt}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}};

export default ErrorPage;
