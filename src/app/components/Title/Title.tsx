import React, {useState, useEffect} from 'react'
import { useFruits } from '../../hook/useFruits';

const Title = () => {
  const {pokemon: poke, loading} = useFruits({resource: 'api/v2/pokemon/ditto'})

  console.log(poke);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>Olá mundo</div>
  )
}

export default Title