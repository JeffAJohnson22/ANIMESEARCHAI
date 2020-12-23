import React from 'react'
import AnimeCard from '../AnimeCard/AnimeCard'
import { Grid, Grow, Typography } from '@material-ui/core'
import useStyles from './styles.js'


const infoCards = [
  { color: '#00838f', title: 'General information', text: 'Tell me about DragonBall Z' },
  { color: '#1565c0', title: 'Search by Manga, Anime, Person or Character', info: 'Any anime, any character, any person or manga', text: 'What is the Anime DragonBall Z about?'},
  { color: '#4527a0', title: 'Top upcoming Animes', info: 'Yakusoku no Neverland, Dr. Stone: Stone Wars, Beastars 2nd Season, Horimiya...', text: 'What about the top animes today?' },
  { color: '#283593', title: 'What animes came out in the past or future?', info: 'Find out what animes dropped in a year and season', text: 'What anime came out in the winter of 2018?' },
];

const AnimeCards = ( {theAnimes} ) => {
const classes = useStyles()

  if(!theAnimes.length){
    return (
      <Grid in>
        <Grid className={classes.container} container alignItems='stretch' spacing={3}>
            {infoCards.map((infoCard) => (
              <Grid className={classes.infoCard} item xs={12} md={4} sm={6} lg={3}>
                <div className={classes.card} style={{backgroundColor: infoCard.color }}>
                  <Typography variant='h5'>{infoCard.title}</Typography>
                  {infoCard.info 
                  ? (<Typography variant='h6'>
                      <strong>
                        {infoCard.title.split(' ')[0]} : 
                      </strong>
                      <br/>
                      {infoCard.info}
                      </Typography>) : null}
                      <Typography variant='h6'>Try saying :<br/> <i>{infoCard.text}</i></Typography>
                </div>
              </Grid>
            ))}
        </Grid>
      </Grid>
    )
  }

  return (
    <Grow in> 
      <Grid container alignItems='stretch' spacing={3}>
            {theAnimes.map((anime, i) => (
              <Grid key={i} className={classes.container} item xs={12} md={4} sm={6} lg={3} style={{display: 'flex'}}>
                <AnimeCard anime={anime} i={i} />
              </Grid>
            ))}
      </Grid>
    </Grow>
  )
  
}

export default AnimeCards



