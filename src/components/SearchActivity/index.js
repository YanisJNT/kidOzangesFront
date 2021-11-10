
import axios from "axios";
export default function SearchActivity(){

    const data = async  () => {
        const response = await  axios.get("https://kidozanges.herokuapp.com/api/searchactivity")

        console.log(response.data)
    }

    data()

    return(
        <div>
            <h3>qsdqsdqsdsq</h3>
        </div>
    )
}