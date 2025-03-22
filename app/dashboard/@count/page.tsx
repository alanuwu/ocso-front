import { TOKEN_NAME } from "@/constants"
import axios from "axios";
import {cookies} from "next/headers";

const CountPage = async() => {
    const userCookies = cookies()
    const token = userCookies.get(TOKEN_NAME)?.value
    const countLocations = await axios.get("http://localhost:4500/locations", {
        headers: {
            // Authorization: `Bearer ${token}`,
        }
    })
    console.log(countLocations.data);
    return `Hay ${ countLocations?.data.length } tiendas`
} 

export default CountPage;