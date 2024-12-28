import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeComponent from './ThemeComponent/ThemeComponent.tsx'
import { Provider } from 'react-redux'
import store from './Store/store.ts'

store.subscribe(()=>{
  console.log(">>", store.getState())
})

createRoot(document.getElementById('root')!).render(
 
    <Provider store={store}>
   <ThemeComponent/>
   </Provider>
  ,
)
