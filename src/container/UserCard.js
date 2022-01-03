import React from 'react';
import './UserCard.css';

const UserCard = ({click,stateData}) =>{
    

    // let image = require("./profilepic.jpg");


    
     const {email,phone,picture,name} = stateData[0];
     const {first, last} = name;
     const {large }  = picture
    

    return(
        <div className='cards'>
            <div className='card__component'>
                <div className='picture__box'>
                    <img src= {large} alt="profile" />
                </div>
                <div className='userProfile'>
                    <h3>Name: {`${first} ${last}`}</h3>
                    <h3>Email: s{email}</h3>
                    <h3>Phone Number: {phone}</h3>

                    <button onClick = {click}>Click</button>
                </div>
                
            </div>
        </div>
    )
}


export default UserCard;