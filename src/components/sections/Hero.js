import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
// import ButtonGroup from "../elements/ButtonGroup";
import Image from "../elements/Image";
// import DownloadButtonApple from "../../assets/images/download-button-apple.svg";
import CountUp from "react-countup";
import { BsTwitter,BsInstagram,BsDiscord, BsReddit, BsFacebook } from "react-icons/bs";
import { FaTiktok, FaYoutube } from "react-icons/fa";


import "./Hero.css";
import Landing from "../elements/Landing";
// import { Link } from "react-router-dom";
// import SearchBar from "../elements/SearchBar";
import SearchAnalyzer from "../../views/SearchAnalyzer";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  // const innerClasses = classNames(
  //   "hero-inner section-inner",
  //   topDivider && "has-top-divider",
  //   bottomDivider && "has-bottom-divider"
  // );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        
        <div className='landing_outer'>
        <Landing/>
        </div>

        <iframe src='https://sweet-brioche-a186d9.netlify.app'
        className='iframe-widget'
        title='widget'
        >

        </iframe>
        
        {/* <div className={innerClasses} style={{ paddingBottom: "55px" }}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="150"
            >
              A Social{" "}
              <span className="text-color-primary">Reputation System</span> For
              Finance Creators.
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="300"
              >
                <u>Eliminate</u> noise and misinformation. Only trust accurate
                content and people.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <a href="https://apps.apple.com/us/app/playfair/id1569409606">
                    <img
                      src={DownloadButtonApple}
                      alt="download-on-app-store"
                      className="download-button-apple"
                    />
                  </a>
                 
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div> */}

        <div className="container-sm" style={{ marginBottom: "10rem" }}>
          <h3
            className="mt-16 mb-16 reveal-from-bottom"
            data-reveal-delay="800"
          >
            <span style={{ width: "50%", float: "left" }}>
              <div>Over</div>

              <CountUp end={1000000} duration={5} separator="," />
              <div>social points analyzed <br/>per day. </div>
            </span>

            <span style={{ width: "50%", float: "right" }}>
              <div>Over</div>
              <CountUp end={25000} duration={5} separator="," />
              <div>predictions verified<br/>  per day. </div>
            </span>
          </h3>
        </div>
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
                      placeholder='Enter @ Twitter Handle'
                      />
                      <Link to='/search'>
                      <button>Verify</button>
                      </Link>
                      
                      <p>*Verify the accuracy of any Twitter account in <b>one click &#128640;</b></p>
                      </fieldset>
                    </form> */}
              <SearchAnalyzer
              />
             
        <div className="container-sm" style={{ marginBottom: "4rem" }}>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
            style={{ marginTop: "3rem" }}
          >
            <Image
              className="has-shadow"
              src={require("./../../assets/images/app-screenshot.png")}
              alt="Hero"
              width={986}
              height={646}
            />
          </div>
        </div>
        <div
          className="container-sm"
          style={{ marginBottom: "4rem", fontSize: "3rem" }}
        >
          <div style={{ marginBottom: "3rem", fontSize: "2rem" }}>
            Our app integrates with
          </div>
          <div>
            <span style={{ marginLeft: "5px",
                marginRight: "5px",width: "70px", display: "inline-block" }}>
              <BsTwitter size="0.7em" />
            </span>
            <span style={{ marginLeft: "5px",
                marginRight: "5px",width: "70px", display: "inline-block" }}>
              <BsInstagram size="0.7em" />
            </span>
            <span
              style={{
                width: "70px",
                display: "inline-block",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            >
              <BsDiscord size="0.7em" />
            </span>
            
            <div className='coming_soon'>
             <p
             style={{fontSize: "2rem", marginTop:'15px'}}
             >Coming soon </p>
             <p style={{fontSize: "2rem", marginTop:'15px'}}>:</p> 
            <span
            style={{ marginLeft: "5px",
            marginRight: "5px",width: "70px", display: "inline-block" }}
            >
              <FaYoutube
              
              />
            </span>
            <span
            style={{ marginLeft: "5px",
            marginRight: "5px",width: "70px", display: "inline-block" }}
            >
              <FaTiktok
              size='0.7em'
              />
            </span>
            <span
            style={{ marginLeft: "5px",
            marginRight: "5px",width: "70px", display: "inline-block" }}
            >
              <BsFacebook
              size='0.7em'
              />
            </span>
            <span
            style={{ marginLeft: "5px",
            marginRight: "5px",width: "70px", display: "inline-block" }}
            >
              <BsReddit
              size='0.7em'
              />
            </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
