import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'


function Detail() {

  //! que es params? {id: 3} ROUTE /:id

  const {id} = useParams()

  const [characterDetail, setCharacterDetail] = useState({})

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
       if (data.name) {
          setCharacterDetail(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacterDetail({}); // wilUnmount -> cuando me retire de detail
 }, [id]);


  return (
    <div>
 {characterDetail ? (
  <div> 
     <h2 style={{color: "white"}}>Nombre: {characterDetail.name} </h2>
     <h4>{characterDetail.status}</h4>
     <h4>{characterDetail.species}</h4>
     <h4>{characterDetail.gender}</h4>
     <h4>{characterDetail.origin?.name}</h4>
     <img src={characterDetail.image} alt=""/>
  </div>
 ) : <h3> Loading ...</h3>}
    </div>
  )
}

export default Detail

/*

app.js

ROUTE
/detail/:id
params {id: }

card.js
LINK
/detail/3

detail.js
const {id} = useParams() ---> id = 3


*/