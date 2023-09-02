import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  background-color: ${props => (props.close ? 'transparent' : 'black')};
  border-radius: 5px;
  border: none;
  width: fit-content;
  height: fit-content;
  filter: brightness(0.8);
  cursor: pointer;
  padding: 0;

  &:hover {
    filter: brightness(1.5);
    transform: scale(1.2);
  }
`;

export const ButtonCont = styled.div`
  display: flex;
  width: 75%;
  margin-top: 0.5rem;
  justify-content: space-around;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
  width: fit-content;
  padding: 1rem; /* Mayor espacio interno */
  border-radius: 10px;
  border: 2px solid green;
  backdrop-filter: blur(5px);
  margin: 1rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8); /* Sombra más suave */
`;

export const Title = styled.h2`
  font-family: 'Nunito', sans-serif; /* Asegurarse de tener la fuente */
  font-weight: 700;
  color: white;
  margin-bottom: 1rem; /* Mayor margen inferior */
`;

export const Label = styled.h4`
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  color: white;
  margin: 0;
`;

export const Image = styled.img`
  max-width: 100%; /* Usar todo el ancho disponible */
  height: auto; /* Ajustar altura automáticamente */
  margin-top: 1rem; /* Mayor margen superior */
  border-radius: 10px;
`;

// import styled from 'styled-components';

// export const Button = styled.button`
//   display: inline-block;
//   background-color: ${props => (props.close ? 'transparent' : 'black')};
//   border-radius: 5px;
//   border: none;
//   width: fit-content;
//   height: fit-content;
//   filter: brightness(0.8);
//   cursor: pointer;
//   padding: 0;

//   &:hover {
//     filter: brightness(1.5);
//     transform: scale(1.2);
//   }
// `;

// export const ButtonCont = styled.div`
//   display: flex;
//   width: 75%;
//   margin-top: 0.5rem;
//   justify-content: space-around;
// `;

// export const CardContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   background: transparent;
//   width: fit-content;
//   height: fit-content;
//   padding: 0.2rem;
//   border-radius: 10px;
//   border: 2px solid green;
//   backdrop-filter: blur(5px);
//   margin: 1rem;
//   box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
//   -webkit-box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
//   -moz-box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
// `;

// export const Title = styled.h2`
//   font-family: Nunito;
//   font-weight: 700;
//   color: white;
//   margin-bottom: 0.5rem;
//   text-decoration: none;
// `;

// export const Label = styled.h4`
//   font-family: Nunito;
//   font-weight: 400;
//   color: white;
//   margin: 0px;
// `;

// export const Image = styled.img`
//   max-width: 75%;
//   height: 30%;
//   margin-top: 0.5rem;
//   border-radius: 10px;
// `;