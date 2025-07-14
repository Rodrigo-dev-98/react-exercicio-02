import React from 'react'

const Produto = ({nome, propriedades}) => {
  return (
    <div style={{border: '1px solid #eee', margin: '10px 0', borderRadius: "15px", padding: "10px"}}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  )
}

export default Produto
