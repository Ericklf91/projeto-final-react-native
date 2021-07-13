import React from 'react';

export default React.createContext({
  produtos: [],
  addProduto: (produto) => { },
  delProduto: (produtoId) => { }
});