import React from 'react';

const Header = () => {
  return (
    <header style={{backgroundColor: '#ccc', padding: '10px'}}>
      <ul style={{backgroundColor: '#ccc', justifyContent: 'space-between', display: 'flex', padding: '10px', flexDirection: 'row', width: "30%", listStyle: 'none'}}>
        <li>
          <a style={{textDecoration: 'none', color: 'black'}} href="/">Home</a>
        </li>
        <li>
          <a style={{textDecoration: 'none', color: 'black'}} href="/produtos">Produtos</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
