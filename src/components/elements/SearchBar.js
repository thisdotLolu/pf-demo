import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SearchBar = () => {
  return (
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
      />
      <Link to='/search'>
      <button>Verify</button>
      </Link>
      
      <p>*Verify the accuracy of any Twitter account in <b>one click &#128640;</b></p>
      </fieldset>
    </form>
  )
}

export default SearchBar


