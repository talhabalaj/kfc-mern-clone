import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Collection from './pages/Collection'

export const Entry = () => {
  return (
    <Routes>
      <Route path=":slug" element={<Collection />} />
    </Routes>
  )
}
