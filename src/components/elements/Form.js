import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import './Form.css';


const Form = () => {
    const {arrowbtc1,arrowbtc2,arrowusd2,arrowusd1,arrowsp1,arrowsp2,
        setArrowbtc1,setArrowbtc2,setArrowusd1,setArrowusd2,setArrowsp1,setArrowsp2,
        setUsername,setSocialprofile,setEmail,username,email,socialprofile}=useContext(UserContext)


const url='https://submit-user-daily-pick-ezabt3ziva-ue.a.run.app/submit_user_daily_pick_embedded'

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
let raw1 = JSON.stringify({
    "username": username,
    "asset": "BTC",
    "direction": arrowbtc1?'up':'down',
    "email": email,
    "social_media_profile": socialprofile
  });
let raw2 = JSON.stringify({
    "username": username,
    "asset": "USD",
    "direction": arrowusd1?'up':'down',
    "email": email,
    "social_media_profile": socialprofile
  });
let raw3 = JSON.stringify({
    "username": username,
    "asset": "SPY",
    "direction": arrowsp1?'up':'down',
    "email": email,
    "social_media_profile": socialprofile
  });
  
  let requestOptions1 = {
    method: 'POST',
    headers: myHeaders,
    body: raw1,
    redirect: 'follow'
  };
  let requestOptions2 = {
    method: 'POST',
    headers: myHeaders,
    body: raw2,
    redirect: 'follow'
  };
  let requestOptions3 = {
    method: 'POST',
    headers: myHeaders,
    body: raw3,
    redirect: 'follow'
  };


const submitDailyPicks=async()=>{
    const dailyPick1= fetch(url,requestOptions1)
    const dailyPick2= fetch(url,requestOptions2)
    const dailyPick3= fetch(url,requestOptions3)

    await dailyPick1.then(res=>res.text()).then((res)=>console.log(res));
    await dailyPick2.then(res=>res.text()).then((res)=>console.log(res))
    await dailyPick3.then(res=>res.text()).then((res)=>console.log(res))
}

        const handleSubmit=(e)=>{
            e.preventDefault()
            submitDailyPicks()
            console.log(arrowbtc1)
            console.log(arrowusd1)
            console.log(arrowsp1)
            console.log(username)
            console.log(email)
            console.log(socialprofile)
            setUsername('')
            setEmail('')
            setSocialprofile('')
        }
    
  return (
    <div className='dailyPicksForm'>
        <div className='dailyPicksForm__inner'>
           
            <form className='form_container'>
            <h2>SIGN UP TO PLAYFAIR</h2>
                <label>
                    <p>Username:</p>
                    <input
                    type='text'
                    placeholder='Enter Preferred Username'
                    onChange={(e)=>setUsername(e.target.value)}
                    value={username}
                    />
                </label>
                <label>
                    <p>Email:</p>
                    <input
                    type='email'
                    placeholder='Enter your email'
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    />
                </label>
                <label>
                    <p>Social Profile:</p>
                    <input
                    type='text'
                    placeholder='Twitter username e.g @databoy97'
                    onChange={(e)=>setSocialprofile(e.target.value)}
                    value={socialprofile}
                    />
                </label>
                <button
                onClick={handleSubmit}
                className='submitData'
                type='submit'>
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default Form