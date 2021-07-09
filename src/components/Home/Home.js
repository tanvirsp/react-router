import React, { useEffect, useState } from 'react';
import './Home.css';
import Team from '../Team/Team';


const Home = () => {
    const [teams, setTeams] = useState([]);
        
    
    useEffect(()=>{ 
        const url ="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";     
        fetch(url)
        .then(res => res.json())
        .then (data => setTeams(data.teams))   
    } ,[]);
    
    
    

    return (
        <div >
           
            <div className="heroBanner"  >
                <h1>English Premier League</h1>
            </div>        
            <div  className="team-section">    
                <div className="container ">            
                    <div className="row">      
                        { 
                            teams.map(team => <Team key ={team.idTeam} team={team}></Team>)
                        }
                    </div>          
                </div>               
            </div>

        </div>
    );
};

export default Home;