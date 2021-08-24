import React, { useState, useEffect } from 'react'

import { useParams } from "react-router-dom";
import axios from 'axios';
import './Overview.scss';

import Layout from '../../../../Components/Layout/Layout';
import {Tabs, Tab} from "../../../../Components/Tabs/Tabs"
import GetAllDataOverview from '../../../../Components/GetAllDataOverview/GetAllDataOverview';
import Matches from '../../../../Components/Matches/Matches';
import ProfileInfo from '../../../../Components/ProfileInfo/ProfileInfo';

function Overview({match}) {
    //in order to get lenght state has be array 
    // const [isLoading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetchItem();
    //  }, []);

    // const fetchItem = async () => {
    //     const fetchItem = await fetch(`http://localhost:3001/api/warzone/standard/matches/${match.params.platform}/${match.params.username}`);
    //     const item = await fetchItem.json();
    //     setTimeout(function () {
    //         setWzData(item.data);
    //         setLoading(false);

    //     }, 500)
    // }

    // let display; 
    // if (isLoading) {
    //     display = <img className="imageCenter" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />;
    // } else {
    //     display = <div className="container">
    //             <Tabs>
    //                 <Tab label={"overview"} tabName={"Overview"}>
    //                     <Matches platform={match.params.platform} username={match.params.username} />
    //                 </Tab>
    //                 <Tab label={"subscribed"} tabName={"Subscribed"}>
    //                     <h1>Subscribed</h1>
    //                 </Tab>
    //             </Tabs>
    //         </div>
    // }

    return (
        <Layout>
            <div className="wz_cover" style={{backgroundImage: `url("https://trackercdn.com/cdn/cod.tracker.gg/warzone/images/warzone-profile.jpg")`}}>
                <div className="wz_cover-overlay"></div>
            </div>
            <ProfileInfo user={match.params.username}/>
            <Tabs>
                    <Tab label={"overview"} tabName={"Overview"}>
                        <Matches platform={match.params.platform} username={match.params.username} />
                    </Tab>
                    <Tab label={"subscribed"} tabName={"Subscribed"}>
                        <h1>Subscribed</h1>
                    </Tab>
                </Tabs>
        </Layout>
    )
}

export default Overview;
