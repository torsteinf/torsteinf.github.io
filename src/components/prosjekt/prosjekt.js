import React from 'react'
import { ProsjektBoks, ProsjektBoksTekst, ProsjektBoksTittel, ProsjektBoksUrlKode, ProsjektBoksUrlNettside } from '../style/styles'

const Prosjekt = ({tittel, kildekodeurl, nettsideurl, tekst}) => {
  return (
    <>
      <ProsjektBoks>
        <ProsjektBoksTittel>{tittel}</ProsjektBoksTittel>
        <ProsjektBoksUrlKode><a href={kildekodeurl}>{kildekodeurl}</a></ProsjektBoksUrlKode>
        <ProsjektBoksUrlNettside><a href={nettsideurl}>{nettsideurl}</a></ProsjektBoksUrlNettside>
        <ProsjektBoksTekst>{tekst}</ProsjektBoksTekst>
      </ProsjektBoks>
    </>
  )
}

export default Prosjekt