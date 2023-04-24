import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const product = action.payload

      if (state.itens.find((produto) => produto.id === product.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(product)
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const addFavoritos = action.payload

      if (state.favoritos.find((p) => p.id === addFavoritos.id)) {
        state.favoritos.filter((p) => p.id !== addFavoritos.id)
      } else {
        state.itens.push(addFavoritos)
      }
    }
  }
})
// function favoritar(produto: Produto) {
//   if (favoritos.find((p) => p.id === produto.id)) {
//     const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
//     setFavoritos(favoritosSemProduto)
//   } else {
//     setFavoritos([...favoritos, produto])
//   }
// }

export const { adicionar, favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
