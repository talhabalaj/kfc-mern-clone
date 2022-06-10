import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CollectionEntry from './modules/collection'
import { store } from './store'
import { Layout } from './Layout'

import './App.scss'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="collection/*" element={<CollectionEntry />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
