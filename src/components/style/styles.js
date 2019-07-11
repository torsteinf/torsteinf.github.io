import styled from 'styled-components'

export const Box = styled.div`
  border: 1px solid black;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  padding: 0 1.6rem;
`

export const Lenke = styled.a`
  
`

export const ProsjektBoks = styled.div`
  align-items: center;
  background: white;
  border: 1px solid whitesmoke;
  border-radius: 3px;
  margin: 0 1.4rem 1.4rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
  top: 0;
  transition: all .1s ease-in;
  :hover {
    box-shadow: 0 4px 5px rgba(0,0,0,0.2);
  }
`

export const ProsjektBoksTekst = styled.div`
  line-height:1.4;
  text-decoration: none;
  color: black;
  padding:1.4rem;
  a {
    text-decoration: none;
    border-bottom: .2rem solid #3DC4BE;
  }
`

export const ProsjektBoksTittel = styled.div`
  background: rgb(60,57,121);
  background: linear-gradient(174deg, rgba(60,57,121,1) 0%, rgba(67,156,209,1) 0%, rgba(120,175,174,1) 100%);
  margin: 0 auto;
  padding: 1.2rem;
  font-size: 1.6rem;
  font-weight: bold;
  width: 100%;
`

export const ProsjektBoksUrl = styled.div`
  line-height:1.4;
  width: 100%;
  padding: 1.4rem; 
  a {
    text-decoration: none;
    color: brown;
  };
  
`
export const ProsjektBoksUrlKode = styled(ProsjektBoksUrl)`
  ::before {
    content: "Kildekode: "
  }
`;

export const ProsjektBoksUrlNettside = styled(ProsjektBoksUrl)`
  ::before {
    content: "Nettside: "
  }
`;


export const ProsjektGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Section = styled.section`
  padding: 1.4rem;
  margin: 1.4rem;
`