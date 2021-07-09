import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'
import {Link, useHistory} from "react-router-dom";

const Team = (props) => {
    const {strTeam, strSport, strTeamLogo, idTeam} = props.team;

    const history = useHistory();
    const exploreDetail = id =>{
       history.push(`/teamDetail/${id}`);
    };

    return (
        <div className="col-lg-4 col-sm-12 col-md-6 ">
            <div className="team">
                <img src={strTeamLogo} alt="" />
                <h2>{strTeam}</h2>
                <p>Sports type: {strSport}</p>
                <button className="main-button" onClick={()=> exploreDetail(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
           
        </div>
    );
};

export default Team;