import React from 'react'
import Prosjekt from './prosjekt'

const Prosjekter = () => {
  return (
    <div>
      <Prosjekt 
        tittel="Regionskampen"
        kildekodeurl="https://regionskampen.net/"
        nettsideurl="https://github.com/torsteinf/regionskampen"
        tekst="Nettside laget med Gatsby og Styled Components. Gatsby benytter React og GraphQL, og er en progressiv webapp. Siden er for en fotballkamp jeg spiller en gang i året."
      />
      <Prosjekt 
        tittel="Prosjekt 3"
        kildekodeurl="https://folk.ntnu.no/torstfr/js/prosjekt3/"
        nettsideurl="https://github.com/torsteinf/kontaktliste-js"
        tekst="Avsluttende skoleoppgave i faget Programmering for web (Javascript). Det er en kontaktliste med mulighet til å legge til nye kontakter og redigere. Informasjonen hentes fra en JSON-fil. Her benyttet jeg CSS-rammeverket Milligram og kartkomponenten Leaflet, ellers er alt JS / HTML. Fikk toppkarakter i faget."
      />
      
      <Prosjekt 
        tittel="Villsaubutikken"
        kildekodeurl="https://bitbucket.org/torsteinf/villsau"
        tekst="Enkel lageroversikt for selskapets ansatte. Lagde denne ved hjelp av PHP, MySQL og Bootstrap."
      />
    </div>
  )
}

export default Prosjekter