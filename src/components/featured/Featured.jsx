import React, { useEffect, useState } from 'react';
import './Featured.scss';
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import axios from "axios";

const Featured = ({type, setGenre}) => {
  const [content, setContent] = useState({});
  useEffect(() => {
    const getRandomContent = async () => {
      try{
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2YwOTMwMjk5NGMwYTI5YzA2NmYyMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTU3ODIwMywiZXhwIjoxNjkyMDEwMjAzfQ.Co2zWU4dR5SMf7j24Dg4U9sjJczMl-niVg-fyC50a2U"
          }
        });
        console.log(res)
        setContent(res.data[0]);
      }catch(err){
        console.log(err);
      }
    }
    getRandomContent();
  }, [type])
  
  //console.log(content);
  return (
    <div className='featured'>
    {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={e=> setGenre(e.target.value)}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
        <img
            src={content.img}
            alt=""
        />
        <div className="info">
        <img
          src={content.imgTitle}
          alt=""
        />
        <span className="desc">
          {content.desc}
        </span>
        <div className='buttons'>
        <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
        </div>
    </div>
  )
}

export default Featured