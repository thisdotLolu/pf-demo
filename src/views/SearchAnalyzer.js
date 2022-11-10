import React, { useState } from 'react'
import './SearchAnalyzer.css';
import PlaceholderLoading from 'react-placeholder-loading'
import { ColorRing } from  'react-loader-spinner'
import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';


const SearchAnalyzer = () => {

    const [name,setName]=useState('')
    const[data,setData]=useState(null)
    const[loading,setLoading]=useState(false)
    const[loading1,setLoading1]=useState(false)
    const[loading2,setLoading2]=useState(false)
    
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

let raw = JSON.stringify({
  "username": name
});

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
const fetchData=async()=>{
    setLoading1(true)
    await fetch('https://twitter-selected-user-scraper-nlp-ezabt3ziva-ue.a.run.app/scrap_twitter_user',requestOptions)
.then(res=>{
    setLoading1(false)
    return res.text()
}).then(res=>console.log(res))
setLoading2(true)
   await fetch('https://twitter-selected-user-scoring-ezabt3ziva-ue.a.run.app/score_twitter_user',requestOptions)
.then(res=>{
    setLoading2(false)
    return res.text()
}).then(res=>console.log(res))
setLoading(true)
   await fetch('https://get-user-data-website-ezabt3ziva-ue.a.run.app/get_user_data_twitter',requestOptions)
   .then(res=>{
    if(res.status===500){
        setData('Error')
        setLoading(false)
        return<h1>No data Collected</h1>
        
    }
    return res.json()
})
    .then(res=>{
    setLoading(false)
    setData(res)
    })
// console.log(results)
}


const handleSubmit=(e)=>{
    e.preventDefault()
    setData('')
    fetchData()
}

  return (
    
    <div className='input_container'>
        <div className='input_inner_container'>
            <form className='top_section_form'>
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
                      placeholder='Enter @ Twitter Handle'
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      />
                      <Link to='/search'><button
                      onClick={handleSubmit}
                      >Search</button></Link>
                 <p>*Verify the accuracy of any Twitter account in <b>one click &#128640;</b></p>      
                 </fieldset>
                    </form>
            <div
            style={{marginTop:'30px'}}
            >
            {loading1 && <div
            style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}
            >
                <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                color='#4fa94d'
/>
                Analysing User Data...</div>}
            {loading2 && <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                color='#4fa94d'
/>
                <p>Scoring User</p></div>}
            {loading && <PlaceholderLoading
            shape="rect" width={500} height={300}
            />
            }
            </div>
            
            {
                data && (
                    <div className='user_container'>
                    <h2 style={{color:'red'}}>{data.username? '':'No direction or target tweets found'}</h2>
                     <div className='user_name'>USERNAME : <span className='user_name_display'>{data?.username}</span></div>
                    <div className='user_points'>POINTS : {data?.points}</div>
                    <div className='user_points'>TOTAL PREDICTIONS : {data?.total_predictions}</div>
                    <div className='user_points'>ACCURATE : {data?.accurate_predictions}</div>
                    {/* <h1></h1> */}   
                    </div>
                ) 
            }
        </div>
    </div>
  )
}

export default SearchAnalyzer;