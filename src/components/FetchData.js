import axios from "axios"

async function fetchData ( url, setAllNews ) {
    const resp = await axios.get( url )
    const results = resp.data
    setAllNews( results.articles )
}


export default fetchData