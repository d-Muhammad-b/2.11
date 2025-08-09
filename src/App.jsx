
import './App.css'
import Header from './assets/header'
import "./i18n"
import { useTranslation } from 'react-i18next'

function App() {
  const {t,i18n}=useTranslation();
  return (
    <div>
      <Header></Header>
      <main>
        <header>
        <h1>{t("hero")}</h1>
        <p>{t("info")}</p>
        <div className='poisk'>
          <button className='dastavka'> Delivery </button>
          <button className='dastavka2'> Pickup </button> <br />
          <input type="text" placeholder='Enter Your Address' className='poiskinput'/>
          <button className='btn_search'>{t("btn")}</button>
          </div>
        </header>
      </main>
    </div>
  )
}

export default App
