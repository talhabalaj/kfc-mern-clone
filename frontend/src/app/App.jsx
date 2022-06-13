import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

const CollectionEntry = React.lazy(() => import('./modules/collection'))
const ProductEntry = React.lazy(() => import('./modules/product'))
const StartPage = React.lazy(() => import('./modules/start-page'))

import { store, persistor } from './store'
import { Layout } from './Layout'

import './App.scss'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<p className="full-page-loading">Loading...</p>}>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Layout />}>
                <Route index element={<StartPage />} />
                <Route path="collection/*" element={<CollectionEntry />} />
                <Route path="product/*" element={<ProductEntry />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
      </PersistGate>
    </Provider>
  )
}

export default App
