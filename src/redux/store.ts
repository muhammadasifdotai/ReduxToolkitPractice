import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'
import AuthSlice from './features/AuthSlice'

// aik configureStore hay or us may hamaray reducers ayee gay.

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: AuthSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch