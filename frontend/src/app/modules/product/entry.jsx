import { Route, Routes } from 'react-router-dom'
import { ProductPage } from './pages'


export const Entry = () => {
  return (
    <Routes>
      <Route path=":slug" element={<ProductPage />} />
    </Routes>
  )
}
