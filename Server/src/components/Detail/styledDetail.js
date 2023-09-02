import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Centrar verticalmente */
  height: 100vh; /* Altura del viewport */
  background-color: #f0f0f0; /* Color de fondo */
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff; /* Fondo blanco */
  width: fit-content;
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid #4caf50; /* Borde verde */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra más suave */
`;

export const Title = styled.h2`
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  color: #333; /* Color del título */
  margin-bottom: 0.5rem;
`;

export const Label = styled.h4`
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  color: #555; /* Color del texto */
  margin: 0;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 0.5rem;
  border-radius: 10px;
`;


// import styled from 'styled-components';

// export const Container = styled.div`
// display: flex;
// justify-content: center;`

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