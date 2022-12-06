import { useState, useEffect } from "react";
import "./App.css";
import countries from "./components/countries";
import fetchData from "./components/FetchData.js";
import NewsList from "./components/newsList";
import OtherNews from "./components/otherNews/OtherNews";

const App = () => {
  const [ country, setCountry ] = useState( "br" );

  const [ actual, setActual ] = useState( 3 );

  const [ news, setNews ] = useState( null );

  const [ actualNews, setActualNews ] = useState( [] );

  const end = 6

  function passToNext () {
    setActual( actual + 3 );
    setActualNews( news.slice( actual, actual + 3 ) );
    if ( actual === end ) {
      setActual( 0 );
    }
  }

  function handleInputChange ( event ) {

  }

  function handleCountryClick ( event ) {
    setCountry( event.target.innerText.toLowerCase() );
  }

  function setAllNews ( object ) {
    setNews( object );
    setActualNews( object.slice( 0, 3 ) );
  }

  const url = "https://newsapi.org/v2/top-headlines?country=" + country + "&pageSize=40&apiKey=5fbbac6bc5334ac787809a5782036588";

  useEffect( () => {
    fetchData( url, setAllNews );
  }, [ url ] );

  return (
    <div className="App">
      { news && (
        <>
          <div className="wraper">
            <div className="input-div">
              <input onChange={ ( event ) => handleInputChange( event ) } />
            </div>
            <button onClick={ passToNext }>Next Page</button>
            <div className="buttons">
              { countries.map( ( country ) => (
                <button
                  key={ country }
                  onClick={ ( event ) => handleCountryClick( event ) }
                  className="ctry">
                  { country }
                </button>
              ) ) }
            </div>
          </div>
          <NewsList news={ actualNews } />
          <OtherNews news={ news.slice( end + 3 ) } />
        </>
      ) }
    </div>
  );
};

export default App;
