import React, { useState } from 'react'
import './dropdown.scss';
import onClickOutside from 'react-onclickoutside';


function Dropdown({items}) {
    const [platform, setPlatform] = useState('');

    const handleChange = (e) => {
        setPlatform(e.target.value);
    }

    const handleSubmit = (e) => {
        alert('fav platform is ' + platform);
        e.preventDefault();
    } 
    
    return (
       <>
        <div className="form-group">
            <label htmlFor="platform">Select your favourite Fruit</label>
                <select className="form-control" id="platform" value={platform} onChange={handleChange}>
                <option value="select">Select</option>

                { items.map((items) => <option value={items.id} key={items.id}>{items.value}</option>)}
            </select>
        </div>
      </>
    )
}


export default Dropdown
