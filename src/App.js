import style from './App.module.css';
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import axios from 'axios'

//! Componentes
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail.jsx'
import About from './components/About/About'
import Error404 from './components/Error/Error404.jsx'
// React.useState

function App() {

const [characters, setCharacters] = useState([])

const onSearch = (id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      if (!characters.find((char) => char.id === data.id)) {
        if (data.name) {
          setCharacters((oldCharacters) => [...oldCharacters, data]);
        }
      } else {
        window.alert(`Ya existe un personaje con el id ${id}`);
      }
    })
    .catch((err) => window.alert(err));
};

const onClose = (id) => {     
setCharacters(characters.filter(char => char.id !== id))
}

   return (
      <div className={style.app}>
         <Nav onSearch={onSearch}/>
         <Routes>
          <Route 
          path='/home' 
          element={ <Cards characters={characters} onClose = {onClose} />}/>
        <Route
        path='/about'
        element={<About/>}/>
        <Route 
        path='/detail/:id'
        element={<Detail/>}
        />
        <Route
        path='*' 
        element={<Error404/>}
        />
         </Routes>
      </div>
   );
}

/*
! ROUTE -> que es lo que quiero que se muestre (element)
           donde quiero que se muestre (path)

           PARAMS
           -> /:id
           {id: }
                    -> el valor lo recibe en la url

! LINK HACIA DONDE
                    <LINK> --> vamos a generar el valor de la url
                       to= id
*/

export default App;


// rfce

// const onSearch = (id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({ data }) => {
//    console.log(data) })
//     .catch((err) => window.alert(err));
// };