import React, { useState, useEffect } from 'react'
import './Matches.scss';
import GameReport from '../Stats/GameReport/GameReport';
import LastSevenGames from '../Stats/LastSevenGames';
function Matches(props) {
    const [wzMatches, setWzMatches] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const { platform, username } = props
    useEffect(() => {
        fetchMatches();
    }, [])

    const fetchMatches = async () => {
        try {
            const fetchItem = await fetch(`http://localhost:3001/api/warzone/standard/matches/${platform}/${username}`)
            const item = await fetchItem.json();
            setTimeout(function () {
                setWzMatches(item.data);
                setLoading(false)
            }, 500)
        } catch (e) {
            console.log('fas');
        }
    }

  

    // console.log(wzMatches.matches.length);
    if (isLoading) {
        return <img className="imageCenter" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />;
    } else {
        return (
            <div className="row">
                <div className="col-2">
                    left
                </div>
                <div className="col-10">
                    <div className="matches">
                        <header>
                            <div className="header_flex">
                                <div className="left">
                                    <div>
                                        <svg viewBox="0 0 31.969 32" className="icon" data-v-b632d9da="" data-v-1728627a=""><path d="M31.97 19v-6h-3V9.862a4.008 4.008 0 002.957-3.285l-1.974-.282a2 2 0 11-2.54-2.2l-.565-1.915a3.987 3.987 0 00.127 7.684V13h-9.99v-2.14a4 4 0 10-2 0V13H4.996V7.866a4 4 0 10-2 0V13h-3v6h8.996v2.14a4 4 0 102 0V19h9.99v5.137a4 4 0 102 0V19zm-5.994-4h4v2h-4zM13.987 7.009a2 2 0 112 2 2 2 0 01-2-2zm-11.988-3a2 2 0 112 2 2 2 0 01-2-1.997zM5.995 17h-4v-2h4zm5.994 7.992a2 2 0 11-2-2 2 2 0 012 1.999zm0-7.992h-4v-2h4zm5.994 0h-4v-2h4zm5.994 10.989a2 2 0 11-2-2 2 2 0 012 1.999zM19.981 17v-2h4v2z" data-v-b632d9da="" data-v-1728627a=""></path><path d="M29.704 5.011l1.729-1a4.028 4.028 0 00-1.974-1.71l-.745 1.853a2.02 2.02 0 01.99.857z" data-v-b632d9da="" data-v-1728627a=""></path></svg>
                                    </div>
                                    <div>
                                        <div className="title">
                                            Match History
                                        </div>
                                        <div className="description">
                                            Updating...
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    Button
                                </div>
                            </div>
                        </header>
                        <div className="lastSeven-stats">
                            <div className="left-stats">
                                <LastSevenGames lastSevent={wzMatches} />
                            </div>
                        </div>
                        <GameReport gameReport={wzMatches.matches} />
               
                    </div>
                </div>
            </div>
           
        )
    }
}
export default Matches