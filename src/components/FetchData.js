import axios from "axios"

async function fetchData ( url, setNews ) {
    const resp = await axios.get( url )
    const results = resp.data
    setNews( results.articles )
}


export default fetchData