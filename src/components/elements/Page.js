import React, { useState } from "react";
// import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";
import CTAText from "./components/CTAtext.js";
import SidePanel from "./components/SidePanel";


// Example for accessing markers: AllMarkersByCountry.ch.markers --> list of objects
import { AllMarkersByCountry } from "./markers";

//For now, styles are available here directly, for simplicity.
//TODO: syled-components? Or sth else?

const useStyles = makeStyles(() => ({
  pageStyle: {
    height: "100vh",
    maxHeight: "100%",
    top: "0px",
    margin: "auto",
    padding: "0px",
    overflow: "none",
    backgroundColor: "#020308"
  },
  halfPageLeft: {
    width: "39%",
    height: "100%",
    //backgroundColor: 'red', //for testing purposes
    padding: "5px",
    float: "left",
    display: "inline"
  },
  halfPageRight: {
    width: "60%",
    height: "100%",
    backgroundColor: "#020308",
    right: "0px",
    float: "left",
    display: "inline"
  },
  
  articlesPositioning: {
    //This effects the box that holds the articles' content.
    position: "absolute",
    top: "10%",
    left: "42%",
    width: "57%",
    height: "90%",
    overflow: "scroll"
  }
}));

const articlesPlacementInLayout = {
  width: "100%"
};

//This touches a single news card's style.
const articleStyle = {
  single: {
    padding: "8px",
    margin: "8px",
    backgroundColor: "#FFF07C",
    float: "left",
    display: "inline",
    maxWidth: "40%",
    height: "160px",
    fontFamily: "sans-serif",
    borderRadius: 4
  },
  headline: {
    fontSize: "16px",
    marginBottom: "8px"
  },
  paragraph: {
    fontSize: 12
  },
  details: {
    fontSize: 10,
    marginBottom: "8px"
  }
};

//Function that fetches the marker data, marker by marker, and formats it to be ready for rendering.

const ArticleComponent = ({ marker }) => {
  return (
    <div style={articleStyle.single}>
      <div style={articleStyle.headline}>{marker.headline}</div>
      <div style={articleStyle.details}>
        <br />
        According to {marker.outlet} in {marker.date}
      </div>
      <div style={articleStyle.paragraph}>{marker.paragraph}</div>
    </div>
  );
};

const closeCards = (e, setDetails) => {
  e.preventDefault();
  setDetails(null);
  console.log("close now pls");
};

const articleCardDisplayerThing = (markers, setDetails) => {
  return (
    <div>
    
    <div style={articlesPlacementInLayout}>
        <Button
        style={{
          position: 'fixed',
          top: '2%',
          right: '2%',
          color: 'white',
          zIndex: '100'
        }}
        onClick={e => closeCards(e, setDetails)}>
        Back to Map
      </Button>

      <h1
      style={{
        color: '#ffffff',
        textAlign: "center",
        width: "80%",
        fontFamily: "sans-serif"

      }}>
        When talking about Coronavirus in the USA, China sees these articles:
      </h1>


      {markers.map(marker => (
        <ArticleComponent key={marker.id} marker={marker} />
      ))}
    </div>
    </div>
  );
};

const Page = () => {
  const classes = useStyles();

  const [selectedCountry, setSelectedCountry] = useState("");

  //Confusion: is this one necessary anymore?
  const prepareInitMarkers = () => {
    console.log("selected country was first: ", selectedCountry);
    setMarkers(initCountryMarkers(selectedCountry));
    console.log("selected country is now: ", selectedCountry);
  };

  const initCountryMarkers = country => {
    let countryMarkers;
    !selectedCountry
      ? console.log("noo don't do that!")
      : (countryMarkers = AllMarkersByCountry[country].markers.map(marker => ({
          ...marker,
          value: marker.value
        })));
    console.log("countrymarkers :", countryMarkers);
    return countryMarkers;
  };

  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);

  //Zoom in animation + functionalities
  const onClickMarker = (marker, markerObject, event) => {
    setEvent({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    //console.log('marker is: ', marker)
    setDetails(articleCardDisplayerThing(markers, setDetails));
  };

  //Zoom out animation + functionalities
  const onDefocus = (previousCoordinates, event) => {
    setEvent({
      type: "DEFOCUS",
      previousCoordinates,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    console.log("here");
    setDetails(null);
  };

  return (
    <div className={classes.pageStyle}>
      {" "}
      {/*Containser for the whole page's content. */}
      <div className={classes.halfPageLeft}>
        <CTAText
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          prepareInitMarkers={() => prepareInitMarkers()}
        />
      </div>
      <div className={classes.halfPageRight}>
        <SidePanel />
        <ReactGlobe
          markers={markers}
          markerOptions={{ activeScale: 1.1 }}
          onClickMarker={onClickMarker}
          onDefocus={onDefocus}
          globeOptions={{
            texture:
              "https://raw.githubusercontent.com/chrisrzhou/react-globe/master/textures/globe_dark.jpg"
          }}
        />
        {/*getTooltipContent function picks the marker's headlines and renders them here nicely; somehow.*/}
        {details && (
          <div className={classes.articlesPositioning}>{details}</div>
        )}
      </div>
    </div>
  );
};

export default Page;