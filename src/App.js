import React, { useState, useEffect } from 'react';

import Nav from './Components/Nav/Nav';
import SlideItem from './Components/SlideItem/SlideItem';
import Loading from './Components/Loading/Loading';
import MovieInfo from './Components/MovieInfo/MovieInfo';
import About from './Components/About/About';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function App() {


  const [fullArray, setFullArray] = useState([]);
  const [appLoaded, setAppLoaded] = useState(false);
  const [activeSlideBefore, setActiveSlideBefore] = useState(0);
  const [aboutToggled, setAboutToggled] = useState(false)

  const API_KEY = 'd17532e59bebbbee29d974df5c3772d7';



  // filter out popular movies and return desired data //

  const popularityReduce = (pageArray) => (
    pageArray.reduce((accumulator, movie) => {


      if (movie.popularity > 10){

        let { title, id, poster_path, release_date } = movie;

        accumulator.push({title, id, poster_path, release_date });
      }

      return accumulator
    }, []));

  
  // sort by date //

  const sortByDate = (fullArray) => (
    fullArray.sort((a, b) => {

      return new Date(a.release_date) - new Date (b.release_date);

    })
  );

  // fetch page (sorted by popularity) and return results //

  async function pageFetch(pageNum) {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}&primary_release_year=2020`);
    const json = await response.json();
    return json.results;
  }


  
  // indicate when data fetching is complete //

  useEffect(() => {
    if (fullArray.length) {

      setAppLoaded(true)
    }

  }, [fullArray]);



  // on INIT, iterate fetching pages from API until reaching a page with 0 movies that satisfy the popularity condition. //

  useEffect(() => {

    async function INIT () {

      let processComplete = false;
      let i = 1;
      let fullArray = [];
  
      while (processComplete===false){
        let page = await pageFetch(i);
        let pageReduced = popularityReduce(page);
  
  
        
        if (pageReduced.length > 0) {
          fullArray = fullArray.concat(pageReduced);
          i++;
          
        }else {

          processComplete = true;
        };
      };
  
      setFullArray(sortByDate(fullArray));
    };
    
    INIT();
  }, []);



  // render slide items //
  
  const slideList =  fullArray.map((movie, index) => (
    <SlideItem index={index} title={movie.title} image={movie.poster_path} />    
  ));


  // carousel settings //
  const settingsThumbs = {
    slidesToShow: 7,
    slidesToScroll: 1,
    className: "center",
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '60px',
    arrows: true,
    lazyLoad: 'ondemand',
    beforeChange: (current, next) => setActiveSlideBefore(next),
    responsive: [
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 5,

        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,

        }
      },
      {
        breakpoint: 712,
        settings: {
          slidesToShow: 1,

        }
      }
    ]
    
  };

  // callback for toggling about section //

  const aboutCallBack = () => {
    setAboutToggled(!aboutToggled)
  }


  return (

    <div className="App">

      <Nav aboutToggled={aboutToggled} aboutCallBack={aboutCallBack} />

      {

        appLoaded   ?

          (

              <div className='app-container'>

                  <MovieInfo 
                            title={fullArray[activeSlideBefore].title} 
                            poster={fullArray[activeSlideBefore].poster_path} 
                            id={fullArray[activeSlideBefore].id}  
                            
                  />

                <div className="slider-wrapper">

                  <Slider {...settingsThumbs}>

                    {slideList}

                  </Slider>

                </div>

              </div>
        ):

        (<Loading />)
      }
      {

        aboutToggled ?
            (
              <div className="overflow">
                <About />
              </div>
              ):
            null            
      }

      <section className="footer">
        <span>Data from The Movie Database.  Copyright TIFF 2020.</span>
      </section>

      </div>

  );
}

export default App;