import styled from 'styled-components'


export const MenuItem = styled.div`
&.large {
    height: 38vw
}
min-width: 30%;
height: 240px;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
margin: 0 7.5px 15px;
overflow: hidden;
`;



// subtitle , {Shop Now}

export const Subtitle = styled.span`
margin-left: 7.5px;
font-weight: bold;
font-size: 16px;
cursor: pointer;
color: white;

`;


// title, {h1}
 
export const Title = styled.h1`
font-weight: bold;
margin-bottom: 6px;
font-size: 22px;
color: #4a4a4a;
color: tomato;
`;

//Content, {div}

 export const Content = styled.div`
margin-right: 7.5px;
font-family: 'Open Sans Condensed', sans-serif;
height: 90px;
width: 100px;
padding: 0 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
box-shadow: 3px 3px 2px gray;
cursor: pointer;
&: hover {
    transform: scale(1.03);
    transition: transform 1s cubic-bezier(0.10, 0.10, 0.10, 0.10);
    box-shadow: 4px 4px 3px black;
}
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-Position: center;
    background-Size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
   

    &:hover {
     cursor: pointer;
     transform: scale(1.1);
     transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
`;


 