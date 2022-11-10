
import  React,{useReducer,useRef,useEffect,useState} from "react";
import Globe from 'react-globe.gl';
// import XLSX from 'xlsx';
import * as XLSX from "xlsx";
import {countries} from '../countries'



const initialState = "unloaded";

function reducer(state, action) {
  switch (action.type) {
    case 'load':
      return "loaded";
    default:
      return state;
  }
}

function GlobeComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const[places,setPlaces] = useState([]);
  const[arcs,setArcs] = useState();
  const[rings,setRings]=useState()

  const fetchData = async () => {
    try {
      let response = await fetch("/datasets/worldcities.xlsx");
      let json = await response.arrayBuffer();
      return { success: true, data: json };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  }  
  useEffect(() => {
    (async () => {
      if (state==="unloaded"){
        let res = await fetchData();
        if (res.success) {
          const wb = XLSX.read(res.data, { type: "array" });
                  const wc = wb.Sheets["worldcities"];
                  const arcs=wb.Sheets["transactions"];
                  const rings=wb.Sheets["transactions"];
                  const wc_data = XLSX.utils.sheet_to_json(wc, {header:1});
                  const arcs_data= XLSX.utils.sheet_to_json(arcs, {header:1});
                  const rings_data= XLSX.utils.sheet_to_json(rings, {header:1});
                  var lon_=[]
                  var lat_=[]
                  var pop=[]
                  var cities=[]
                  var places_=[];
                  wc_data.map( data=>{
                      lon_.push(data[2]);
                      lat_.push(data[1]);
                      pop.push("0.25");
                      cities.push(data[0]);
                      return 1;
  
                  });
                  lon_.shift();
                  lat_.shift();
                  pop.shift();
                  cities.shift();
                  cities.forEach((city, index) => {
                      places_.push({
                              lat:lat_[index],
                              lng:lon_[index],
                              size: pop[index],
                              city:city

                            }
                      )
                    }); 

                    var arc_start_lat=[];
                    var arc_start_lon=[];
                    var arc_end_lon=[];
                    var arc_end_lat=[];
                    var start_city=[];
                    var end_city=[];
                    var rings_start_lat=[];
                    var rings_start_lon=[];
                    var rings_end_lon=[];
                    var rings_end_lat=[];
                    var rings_start_city=[];
                    var rings_end_city=[];
                    var _currentTransaction=""
                    arcs_data.map( data=>{
                     if (_currentTransaction===data[0]){
                           if(data[1]==="end"){
                            end_city.push(data[2]);
                            arc_end_lat.push(data[3]);
                            arc_end_lon.push(data[4]);
                           }
                     } else{
                      if(data[1]==="start"){
                        start_city.push(data[2]);
                        arc_start_lat.push(data[3]);
                        arc_start_lon.push(data[4]);
                        _currentTransaction=data[0];
                     }}
                        return 1;
                   
  
                  });
                    rings_data.map( data=>{
                     if (_currentTransaction===data[0]){
                           if(data[1]==="end"){
                            rings_end_city.push(data[2]);
                            rings_end_lat.push(data[3]);
                            rings_end_lon.push(data[4]);
                           }
                     } else{
                      if(data[1]==="start"){
                        rings_start_city.push(data[2]);
                        rings_start_lat.push(data[3]);
                        rings_start_lon.push(data[4]);
                        _currentTransaction=data[0];
                     }}
                        return 1;
                  });
                  var transaction=[];
                  var rings_info=[]
                  end_city.forEach((city, index) => {
                    transaction.push({
                            startlat:arc_start_lat[index],
                            startlng:arc_start_lon[index],
                            endlat:arc_end_lat[index],
                            endlng:arc_end_lon[index],
                            label:start_city[index]+" to "+city
                          }
                    )
                  }); 
                  rings_end_city.forEach((city, index) => {
                    rings_info.push({
                            startlat:arc_start_lat[index],
                            startlng:arc_start_lon[index],
                            endlat:arc_end_lat[index],
                            endlng:arc_end_lon[index],
                            label:start_city[index]+" to "+city
                          }
                    )
                  }); 
                    // console.log(arcs_data)
                    setArcs(transaction);
                    setRings(rings_info)
                    setPlaces(places_);
                    dispatch({type:"load"});
        }
      
            }
            else if( state==="loaded") {
                
            }
     
    })();
  });


  // const colors = ["#088C67", "#088C67", "#088C67"];
  //  const w = window.innerWidth;
  //  const shiftFactor = 0.55;
  //  const shiftAmmount = shiftFactor * w;

   const globeEl = useRef();

   useEffect(() => {
     globeEl.current.controls().enableZoom = false;
     globeEl.current.controls().autoRotate = true;
     globeEl.current.controls().autoRotateSpeed = 0.7;
   }, []);

return <>
<div style={{marginLeft:'45vw'}}>
<Globe
    width={800}
    style={{marginLeft:'30vw'}}
    ref={globeEl}
    globeImageUrl={"/images/earth-dark.jpg"}
    backgroundImageUrl={'/images/night-sky.png'}
    backgroundColor={'#dedede'}
    height={900}
    initialCoordinates={[29.7604, -95.3698]}
    // onGetGlobe={(globe)=>globe.lock()}
    // width={1000}
    animateIn={true}
    showAtmosphere={true}
    arcsData={arcs}
    arcStartLat={d => +d.startlat}
    arcStartLng={d => +d.startlng}
    arcEndLat={d => +d.endlat}
    arcEndLng={d => +d.endlng}
    arcDashLength={0.9}
    arcDashGap={0.3}
    arcLabel={d=>+d.label}
    arcDashInitialGap={() => Math.random()}
    arcDashAnimateTime={5000}
    arcColor={() => "#088C67"}
    arcsTransitionDuration={4}
    arcStroke={0.5}
    pointsData={places.slice(0,20000)}
    pointColor={() => "#088C67"}
    pointAltitude={0.01}
    pointLabel={"city"}
    pointRadius="size"
    hexPolygonsData={countries.features}
    hexPolygonResolutio={3}
    hexPolygonMargin={0.7}
    hexPolygonColor={() =>"rgba(255,255,255, 1)"}
    waitForGlobeReady={true}
    atmosphereColor={'black'}
    // atmosphereAltitude={'0.3'}
    ringsData={rings}
    ringLat={d => +d.startlat}
    ringLng={d => +d.startlng}
    ringColor={() => "#088C67"}
    ringRepeatPeriod={700}
    />

</div>
    
</>
}
export default GlobeComponent
