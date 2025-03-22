import axios from "axios";

const CountPage = async() => {
    const countLocations = await axios.get("http://192.168.16.132:4500/locations")
    console.log(countLocations.data);
    return "Hay tantas locations: " + countLocations?.data.length;
}

export default CountPage;