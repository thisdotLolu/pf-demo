import React from 'react'
// import EarthGlobe from '../../EarthGlobe'
import GlobeComponent from './Globe'
import './Landing.css'
// import {FaTwitter} from  'react-icons/fa'
// import { Link } from 'react-router-dom'
// import DailyPicks from './DailyPicks'

const Landing = () => {
  return (
    <div className='Landing_container'>
        <div className='Landing_inner'>
            <div className='top_section'>
                <div className='header_text'
                style={{zIndex:'10000000000'}}
                >
                    <h1><span className='verify-info'>Verify information</span> on social networks.<br/>For the first time. Ever.</h1>
                    <p className='faded_subtitle'><span className='artificial_intelligence'>Artificial intelligence</span> that tracks the accuracy of financial content. A social reputation system for finance creators on your favorite platforms</p>
                    
                    
                   
                </div>
                <GlobeComponent
                className='Globe_in_landing'
                style={{marginTop:'150px'}}
                />
            </div>
            <div className='mobileLanding'>
            <h1><span className='verify-info'>Verify information</span> on social networks.<br/>For the first time. Ever.</h1>
                    <p className='faded_subtitle'><span className='artificial_intelligence'>Artificial intelligence</span> that tracks the accuracy of financial content. A social reputation system for finance creators on your favorite platforms</p>
                    
                    
                    {/* <form className='top_section_form'>
                    <fieldset style={{padding:'20px',color:'#088c67',borderRadius:"10px", border:'1px solid #088c67'}}>
                    <legend
                    style={{display:'flex', flexDirection:'row'}}
                    >Get an Instant result <FaTwitter
                    style={{color:'#1d9bf0', marginLeft:'10px'}}
                    />
                    </legend>
                      <input
                      className='Verify_acc_name'
                      type='text'
                      placeholder='Enter Twitter Username e.g @databoy97'
                      />
                      <button>Search</button>
                      <p>*Verify the accuracy of any Twitter account in one click</p>
                      </fieldset>
                    </form> */}
            </div>
        </div>
    </div>
  )
}

export default Landing