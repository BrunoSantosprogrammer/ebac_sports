import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  favoritos: Produto[]
}

const initialState: FavoritosState = {
  favoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produtoNovo = action.payload
      const favoritos = state.favoritos
      if (favoritos.some((p) => p.id === produtoNovo.id)) {
        const favoritosSemOProdutoNovo = favoritos.filter(
          (p) => p.id !== produtoNovo.id
        )
        state.favoritos = favoritosSemOProdutoNovo
      } else {
        state.favoritos.push(produtoNovo)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
