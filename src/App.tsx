import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useMemo, useState } from 'react'
import { Home } from "./pages/Home"
import { Layout } from "./lib/components"
import { Theme } from "./lib/configuration/Theme.styled"


function App() {

  const routes = useMemo(() => ([
    { path: "/", Page: Home },
    { path: "/planos", Page: Home },
    { path: "/servicios", Page: Home },
    { path: "/estacoes", Page: Home },
    
  ]), [])

  return (
    <Theme>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout/>}>
            {routes.map(({ path, Page }, index) => (
              <Route key={index} path={path} element={
                  <Page/>
              } />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  )
}

export default App
