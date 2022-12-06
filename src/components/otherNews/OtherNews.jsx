import React from "react";
import Classes from "./OtherNews.module.css";
const OtherNews = ( { news } ) => {
    return (
        <>
            <h2 style={ { textAlign: "center", margin: "4rem" } }>
                Outras noticias em alta
            </h2>
            <div
                className={ Classes.wraper }>
                { news.length > 0 &&
                    news.map( ( item ) => (
                        <div className={ Classes.card } key={ item.title }>
                            <h4>{ item.title }</h4>
                            <img src={ item.urlToImage }></img>
                        </div>
                    ) ) }
            </div>
        </>
    );
};

export default OtherNews;
