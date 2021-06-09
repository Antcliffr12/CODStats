import React, {useEffect, useState} from 'react';
import Nav from '../Components/Nav/Nav';
import Input from '../Components/FormComponents/Input';
import Select from '../Components/FormComponents/Select';

import axios from 'axios';



function Home(props) {
    const [platform, setPlatform] = useState("");
    const [username, setUsername] = useState("");


    const platforms = ["Activisiion ID", "Playstation Network", "Battle.net", "Xbox Live"];
    const platformOptions = [
        { label: "Activsion ID", value: 'atvi' },
        { label: "Battle.net", value: 'battlenet' },
        { label: "Playstation Network",  value: 'psn' },
        { label: "Xbox Live", value: 'xbl' }
    ]

    const handleInput = (e) => {
        //platform(e.target.value);
        setUsername(e.target.value);
        
    }

    const handleSelect = (e) => {
        setPlatform(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.history.push({
            pathname: `/warzone/profile/${platform}/${username}/overview`,
            state: { platform: platform, username: username}
        })
        // console.log(platform, username);
        // callApi(platform, username)

    }


    
    return (
        <>
        <Nav />
        <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <Select
                        title={"Platform"}
                        name={"platform"}
                        options={platformOptions}
                        value={platform}
                        placeholder={"Platform"}
                        handlechange={handleSelect}

                    />{""}

                    {/* <Select
                        title={"Gender"}
                        name={"gender"}
                        options={this.state.genderOptions}
                        value={this.state.newUser.gender}
                        placeholder={"Select Gender"}
                        handleChange={this.handleInput}
                        />{" "} */}
                    <Input
                        input={"text"}
                        name={"username"}
                        placeholder={"Enter your Username"}
                        value={username}
                        handlechange={handleInput}
                        
                    />{""}
                    <input type="submit" value="Submit" />

              </form>
                
        </div>
        </>
    )
}

export default Home;