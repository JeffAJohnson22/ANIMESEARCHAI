import React, { useState, useEffect} from "react";
import alanBtn from '@alan-ai/alan-sdk-web'
import AnimeCards from './components/AnimeCards/AnimeCards'
import { Button } from '@material-ui/core'


 const App = ( ) => {
  const [theAnimes, setTheAnime] = useState([])


  const alanKey = 'e842d2abfa21c2901693dfd552360efe2e956eca572e1d8b807a3e2338fdd0dc/stage'
  function refreshPage() {
    window.location.reload(false);
  }
  useEffect(() => {
    alanBtn({
      key:alanKey,
      onCommand: ({command, animes, titles}) =>{
        // eslint-disable-next-line no-sequences
        if(command === 'searchedAnimes' , animes){
          // alert('this works')
          setTheAnime(animes)
        }
      }
    })

  }, [])
  return(
    <div>
          <Button onClick={refreshPage} size='small' color='primary' variant='contained'>Click to reload :) !</Button>
      <AnimeCards theAnimes={theAnimes} />
    </div>
  )
}
export default App

