import React from 'react'
import { Box } from '../style/styles'

const Prosjekt = ({tittel, kildekodeurl, nettsideurl, tekst}) => {
  return (
    <>
      <Box>
        <div>{tittel}</div>
        <div>{kildekodeurl}</div>
        <div>{nettsideurl}</div>
        <div>{tekst}</div>
      </Box>
    </>
  )
}

export default Prosjekt