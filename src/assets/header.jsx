import './header.css'
import "../i18n"
import { useTranslation } from 'react-i18next'

function header() {
    const {t,i18n}=useTranslation();
  return (
    <div>
       <section className="header"> 
        <img src="../public/Logo.png" alt="" />
        <div className="function">
            <select onChange={(e)=> i18n.changeLanguage(e.target.value)} value={i18n.language}>
                <option value="ru">Rus</option>
                <option value="uz">Uzb</option>
                <option value="en">Eng</option>
            </select>
            <input type="text" placeholder='search food name'/>
            <button>log in</button>
        </div>
       </section>
    </div>
  )
}

export default header
