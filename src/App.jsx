import { useState, useEffect } from "react";
import "./App.css";
import countries from "./components/countrys";
import fetchData from "./components/FetchData.js";

function geraId () {
  return Math.random() * 1000;
}

const App = () => {
  const [ country, setCountry ] = useState( "br" );

  const [ actual, setActual ] = useState( 0 );

  const [ news, setNews ] = useState( null );

  function passToNext () {
    setActual( actual + 3 );
    if ( actual == 15 ) {
      setActual( 0 );
    }
  }

  function handleCountryClick ( event ) {
    setCountry( event.target.innerText.toLowerCase() );
  }

  const url = "https://newsapi.org/v2/top-headlines?country=" + country + "&apiKey=5fbbac6bc5334ac787809a5782036588";

  useEffect( () => {
    // setNews( 0 )
    fetchData( url, setNews );
  }, [ url ] );

  return (
    <div className="App">
      { news && (
        <>
          <button onClick={ passToNext }>Next Page</button>
          <div>
            { countries.map( ( country ) => (
              <button
                key={ country }
                onClick={ ( event ) => handleCountryClick( event ) }
                className="ctry">
                { country }
              </button>
            ) ) }
          </div>
          <div className="newsGrid">
            <div
              key={ geraId() }
              className="card big">
              <img
                src={ news[ actual ].urlToImage }
                alt=""
              />
              <h4> { news[ actual ].title }</h4>
            </div>
            <div
              key={ geraId() }
              className="card normal">
              <img
                src={ news[ actual + 1 ].urlToImage }
                alt=""
              />
              <h4> { news[ actual + 1 ].title }</h4>
            </div>
            <div
              key={ geraId() }
              className="card normal">
              <img
                src={ news[ actual + 2 ].urlToImage }
                alt=""
              />
              <h4> { news[ actual + 2 ].title }</h4>
            </div>
          </div>
        </>
      ) }
    </div>
  );
};

export default App;
