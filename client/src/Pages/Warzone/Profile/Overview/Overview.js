import React, {useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios';


export default function Overview() {
    const [wzData, setWzData] = useState(null);
    const location = useLocation();

    useEffect(() => {
       callApi(location.state.platform, location.state.username)
    }, [location])

    const callApi = async (platform, username) => {
       await axios.get(`http://localhost:3001/warzone/profile/${platform}/${username}/overview`)
            .then(response => {
                const wzData = response.data.data;
                setWzData({ wzData })
            })
            .catch(function (error) {
            console.log(error.response.data);
        });
    }

    return (
        <div>
            <h1>Overview</h1>
            <ul>
                { console.log(wzData.wzData.title)}
            </ul>
        </div>
    )
}
