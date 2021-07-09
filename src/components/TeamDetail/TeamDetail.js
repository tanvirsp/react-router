import React from 'react';
import './TeamDetail.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import female from '../../images/female.png';
import male from '../../images/male.png';
import found from '../../images/found.png';
import flag from '../../images/flag.png';
import football from '../../images/football.png';
import genderSign from '../../images/male-gender-sign.png';
import facebook  from '../../images/facebook.png';
import twitter  from '../../images/twitter.png';
import youtube  from '../../images/youTube.png';
import {Link} from "react-router-dom";


const TeamDetail = () => {
    const {teamId} = useParams();
    const [teamDetail, setTeamDetail] = useState({});
    const { strTeam, strTeamLogo, strGender, intFormedYear, strCountry, strSport, 
            strDescriptionEN, strFacebook, strYoutube, strTwitter } = teamDetail;
    

    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTeamDetail(data.teams[0]))

    } ,[]);


    return (
        <div>
            <div  className="heroBanner">
                <img height= "120px" src={strTeamLogo} alt="" />
            </div>
            <div className="detail-section">
                <div className="container">
                    <div className="top-section">
                        <div className="row">
                            <div className="col-md-7 col-sm-12 d-flex align-items-center pl-3 detail-head"> 
                                <div>
                                    <h2>{strTeam}</h2>
                                    <h5> <img className="icon" src={found} alt="" /> Founded: {intFormedYear}</h5>
                                    <h5> <img className="icon" src={flag} alt="" /> Country:{strCountry}</h5>
                                    <h5> <img className="icon" src={football} alt="" /> Sport Type: {strSport}</h5>
                                    <h5> <img className="icon" src={genderSign } alt="" />Gender: {strGender}</h5>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-12 detail-image" >
                                <img src={strGender ==="Male" ? male : female  } alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="detail-body">
                        <p>{strDescriptionEN}</p>
                    </div>
                  


                       <div className ="social-media">
                            <a href={`//${strFacebook}`} target="_blank" rel="noopener"> <img src={facebook} alt="" /></a>
                            <a href={`//${strTwitter}`} target="_blank" rel="noopener"> <img src={twitter} alt="" /></a>
                            <a href={`//${strYoutube}`} target="_blank" rel="noopener"> <img src={youtube} alt="" /></a>
                    </div>
                    <Link to="/">
                    <button className="main-button">Go Home</button>
                    </Link>
                </div>
            </div>
            
            
        </div>
    );
};

export default TeamDetail;