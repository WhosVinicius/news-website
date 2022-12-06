import React from "react";
import "../App.css";

function geraId () {
    return Math.random() * 1000;
}

const NewsList = ( { news } ) => {
    return (
        <>
            <h2 style={ { textAlign: "center", margin: "2rem" } }>Principais noticias</h2>
            <div className="newsGrid">
                { news.length > 0 && (
                    <>
                        <div
                            key={ geraId() }
                            className="card big">

                            <img
                                src={ news[ 0 ].urlToImage }
                                alt=""
                            />
                            <h4> { news[ 0 ].title }</h4>
                            <a
                                target={ "_blank" }
                                href={ news[ 0 ].url }>
                                Clique aqui para ler a materia no site
                            </a>
                        </div>
                        <div
                            key={ geraId() }
                            className="card normal">
                            <a
                                target={ "_blank" }
                                href={ news[ 1 ].url }>
                                <img
                                    src={ news[ 1 ].urlToImage }
                                    alt=""
                                />
                            </a>
                            <h4> { news[ 1 ].title }</h4>
                        </div>
                        <div
                            key={ geraId() }
                            className="card normal">
                            <a
                                target={ "_blank" }
                                href={ news[ 2 ].url }>
                                <img
                                    src={ news[ 2 ].urlToImage }
                                    alt=""
                                />
                            </a>
                            <h4> { news[ 2 ].title }</h4>
                        </div>
                    </>
                ) }
            </div>
        </>
    );
};

export default NewsList;
