import React, { useState } from 'react';
import CarrinhoContext from './CarrinhoContext';

const CarrinhoProvider = ({ children }) => {

  const [produtos, setProdutos] = useState([]);

  addProduto = (produto) => {
    setProdutos([...produtos, produto]);
  };

  delProduto = (produtoId) => {
    setProdutos(produtos.splice(produtoId, 1));
  };

  return (
    <CarrinhoContext.Provider
      value={{
        produtos: produtos,
        addProduto: addProduto,
        delProduto: delProduto
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export default CarrinhoProvider;