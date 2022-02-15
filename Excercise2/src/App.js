import { useState } from 'react'
import Button from './Button'
import Title from './Title'
import Lista from './Lista'

const App = () => {

  
  const [maito, setMaito] = useState(0)
  const [leipa, setLeipa] = useState(0)
  const [kahvi, setKahvi] = useState(0)
  const [makkara, setMakkara] = useState(0)
  const lista = [maito, leipa, kahvi, makkara]

  console.log('maito painallukset ' + maito)
  console.log('leipa painallukset ' + leipa)
  console.log('kahvi painallukset ' + kahvi)
  console.log('makkara painallukset ' + makkara)

  const handleMaitoClick = () => {
    setMaito(maito + 1)
  }
  const handleLeipaClick = () => {
    setLeipa(leipa + 1)
  }
  const handleKahviClick = () => {
    setKahvi(kahvi + 1)
  }
  const handleMakkaraClick = () => {
    setMakkara(makkara + 1)
  }
  return (
    <div>
      <Title />
      <div>
        <div>maito {maito} litraa</div>
        <div>leipa {leipa} pussia</div>
        <div>kahvi {kahvi} pakettia</div>
        <div>makkara {makkara} pakettia</div> 
      </div>
      <Button handleClick={handleMaitoClick}
      text = 'maito' />
      <Button handleClick={handleLeipaClick}
      text = 'leipä' />
      <Button handleClick={handleKahviClick}
      text = 'kahvi' />
      <Button handleClick={handleMakkaraClick}
      text = 'makkara' />
    </div>
  )
}

export default App

/*<Lista lista = {maito, leipa, kahvi, makkara}/> 

en saanu noita äkkiseltään nätisti toiseen komponenttiin, joka tulostais nuo arvot*/