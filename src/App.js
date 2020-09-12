import React, { useState, useEffect } from 'react';

import Nav from './Components/Nav/Nav';
import SlideItem from './Components/SlideItem/SlideItem';
import Loading from './Components/Loading/Loading';
import MovieInfo from './Components/MovieInfo/MovieInfo';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





function App() {


  const [fullArray, setFullArray] = useState([]);
  const [appLoaded, setAppLoaded] = useState(false)
  const [activeSlideBefore, setActiveSlideBefore] = useState(1);
  const [activeSlideAfter, setActiveSlideAfter] = useState(1);



  const API_KEY = 'd17532e59bebbbee29d974df5c3772d7';




  const popularityReduce = (pageArray) => (
    pageArray.reduce((accumulator, movie) => {

      console.log(movie)
      if (movie.popularity > 10){

        let { title, id, poster_path, backdrop_path, release_date, overview } = movie;

        accumulator.push({title, id, poster_path, backdrop_path, release_date, overview });
      }

      return accumulator
    }, []));

  
    
  const sortByDate = (fullArray) => (
    fullArray.sort((a, b) => {

      return new Date(a.release_date) - new Date (b.release_date);

    })
  );



  async function pageGet(pageNum) {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}&primary_release_year=2020`);
    const json = await response.json();
    return json.results;
  }


  async function thing () {

    let processComplete = false;
    let i = 1;
    let fullArray = [];

    while (processComplete===false){
      let page = await pageGet(i);
      let pageReduced = popularityReduce(page);


      
      if (pageReduced.length > 0) {
        fullArray = fullArray.concat(pageReduced);
        i++;
        
      }else {
        console.log('done');
        processComplete = true;
      };
    };

    setFullArray(sortByDate(fullArray));
  };
  


  useEffect(() => {
    
    thing();
  }, []);




  useEffect(() => {
    if (fullArray.length) {
      console.log(fullArray[6].title)
      setAppLoaded(true)
    }

  }, [fullArray]);


  
  
  const slideList =  fullArray.map((movie, index) => (
    <SlideItem index={index} title={movie.title} image={movie.poster_path} />    
  ));




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
    afterChange: current => setActiveSlideAfter(current)
  };




  return (

    <div className="App">

      <Nav />


      {

        appLoaded   ?

          (
            <div className='app-container'>

              <MovieInfo title={fullArray[activeSlideBefore].title} poster={fullArray[activeSlideBefore].poster_path} overview={fullArray[activeSlideBefore].overview} backdrop={fullArray[activeSlideBefore].backdrop_path} />
              
              
              <div className="slider-wrapper">


                <Slider {...settingsThumbs}>

                  {slideList}

                </Slider>


              </div>
            

          </div>

        ):

        (<Loading />)

      }

      </div>

  );
}

export default App;
