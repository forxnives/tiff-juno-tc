import React, { useState, useEffect } from 'react';

// import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';

import SlideItem from './Components/SlideItem/SlideItem'

import ItemsCarousel from 'react-items-carousel';


// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';




function App() {


  const [fullArray, setFullArray] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState()




  const API_KEY = 'd17532e59bebbbee29d974df5c3772d7';



  const popularityReduce = (pageArray) => (
    pageArray.reduce((accumulator, movie) => {
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
        i++
        
      }else {
        console.log('done')
        processComplete = true;
      }
    }

    setFullArray(sortByDate(fullArray));
  }
  



  useEffect(() => {
    
    thing()
  }, [])




  useEffect(() => {
    console.log(selectedMovie)

  }, [selectedMovie])


  const testFunc = selectedMovie => {
    setSelectedMovie(selectedMovie)
  }




  
  
  const slideList =  fullArray.map((movie, index) => (
    <SlideItem index={index} title={movie.title} image={movie.poster_path} />    
  ))



  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;


  return (

    <div style={{ padding: `0 ${chevronWidth}px` }} className="App">


      {/* <CarouselProvider
        naturalSlideWidth={185}
        naturalSlideHeight={250}
        totalSlides={fullArray.length}
        visibleSlides={10}
      >
          <Slider>

            {slideList}
            
          </Slider>

          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>        


      </CarouselProvider> */}


      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={8}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        showSliter={true}
        slidesToScroll={4}
      >


        {slideList}
      </ItemsCarousel>      





      


    </div>

  );
}

export default App;
