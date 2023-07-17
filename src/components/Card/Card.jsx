import {Button, CardContainer, Title, ButtonCont, Image, Label} from './styled'
import {Link} from 'react-router-dom'

export default function Card({name, status, species, gender, origin, image, onClose, onFavorites, id}) {

   return (
      <CardContainer>
         <ButtonCont> 
         <Button onClick={onFavorites}>💛</Button>
         <Button close onClick={() => onClose(id)}>❌</Button>
         </ButtonCont>
        <Link to={`/detail/${id}`}> <Title> {name}</Title> </Link>  
         <Image src={image} alt = {`No se encuentra la imagen de ${name}`}/>
          <ButtonCont> 
         <Label>| {status} |</Label>
         <Label>| {species} |</Label>
         </ButtonCont>
       
      </CardContainer>
   );
}
