import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import useStyles from './styles.js'


const AnimeCard = ({ anime : {
  mal_id,
  url, 
  image_url, 
  title, 
  airing, 
  synopsis,
  type, 
  episodes,
  score, 
  start_date, 
  end_date, 
  members, 
  rated, 
  chapters,
  publishing,
  volumes,
  alternative_names, 
  name, 
  producers,
  manga,
  airing_start,
  licensors,
  r18, 
  kids,
  anime,
  genres,
  continuing,
  rank }, i }) => {
const classes = useStyles()

  let defaultPicture = 'https://i2.wp.com/comicsworthreading.com/wp-content/uploads/2018/12/ShonenJump_logo.png?fit=835%2C400&ssl='

      // searchperson: mal_id, url, image_url, name, alternative_names[]
    // searchchatacter: mal_id, url, image_url, name, alternative_names[], anime[], manga[]

    // searchanime: mal_id, url, image_url, title, airing:Boolean, synopsis, type, episodes, score, start_date, end_date, members, rated, 
    // searchmanga: mal_id, url, image_url, title, publishing, synopsis, type, chapters, volumes, start_date, end_date, members


    // topanimes: mal_id, rank, title ,url, image_url, type, episodes, start_date, end_date, members, score

    // season and year: mal_id, url, title, image_url, synopsis, type, airing_start, episodes, members, genres:[mal_id, type, name ,url] source, producers:[mal_id, type, name ,url] score, licensors[0, 1, ..] r18:bool, kids:bool, continuing:bool

  return (
    alternative_names ?
    <Card className={classes.card}>
      <CardActionArea href={url} target='_blank'>
        <CardMedia className={classes.media} image={ image_url || defaultPicture } />
        <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{name}</Typography>
        {alternative_names.map((names) => (
          <Typography variant="body2" color="textSecondary" component="h2">{names}</Typography>
        ))}
        {/* <Typography variant="body2" color="textSecondary" component="h2">{members > 20000 ? 'Popular' : !members ? null : "Not Popular" } {type}</Typography> */}
        </div>
        <Typography  className={classes.title} gutterBottom variant='h5'>{title}</Typography>
        <CardContent>
        {anime.map((names) => (
          <Typography variant="body2" color="textSecondary" component="h2">{names}</Typography>
        ))}
         {anime.map((names) => (
          <Typography variant="body2" color="textSecondary" component="h2">{names}</Typography>
        ))}
          <Typography variant='body2' color='textSecondary' component='p'>{synopsis}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button href={url} target='_blank' size='small' color='primary'>Look here</Button>
        <Typography varaint='h5' color='textSecondary'>{i + 1}</Typography>
      </CardActions>
    </Card>
    : airing || publishing ? 
    // searchanime: mal_id, url, image_url, title, airing:Boolean, synopsis, type, episodes, score, start_date, end_date, members, rated, 
    // searchmanga: mal_id, url, image_url, title, publishing, synopsis, type, chapters, volumes, start_date, end_date, members
    <Card className={classes.card}>
    <CardActionArea href={url} target='_blank'>
      <CardMedia className={classes.media} image={ image_url || defaultPicture } />
      <div className={classes.details}>
      <Typography variant="body2" color="textSecondary" component="h2">{title}</Typography>
      <Typography variant="body2" color="textSecondary" component="h2">{members > 20000 ? 'Popular' : !members ? null : "Not Popular" } {type}</Typography>
      <Typography variant="body2" color="textSecondary" component="h2">{(new Date(start_date)).toDateString()} to {(new Date(end_date)).toDateString()}</Typography>
      </div>
      <Typography  className={classes.title} gutterBottom variant='h5'>{title}</Typography>
      <CardContent>
      <Typography variant='body2' color='textSecondary' component='p'>{episodes || chapters}</Typography>
      <Typography variant='body2' color='textSecondary' component='p'>{synopsis}</Typography>

        <Typography variant='body2' color='textSecondary' component='p'>{synopsis}</Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className={classes.cardActions}>
      <Button href={url} target='_blank' size='small' color='primary' variant='contained'>Look here</Button>
      <Typography varaint='h5' color='textSecondary'>{i + 1}</Typography>
    </CardActions>
  </Card>
      // season and year: mal_id, url, title, image_url, synopsis, type, airing_start, episodes, members, genres:[mal_id, type, name ,url] source, producers:[mal_id, type, name ,url] score, licensors[0, 1, ..] r18:bool, kids:bool, continuing:bool
      :
      <Card className={classes.card}>
      <CardActionArea href={url} target='_blank'>
        <CardMedia className={classes.media} image={ image_url || defaultPicture } />
        <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{title}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{members > 20000 ? 'Popular' : !members ? null : "Not Popular" } {type}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">{(new Date(airing_start)).toDateString()}</Typography>
        </div>
        <Typography  className={classes.title} gutterBottom variant='h5'>{title}</Typography>
        <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>{episodes || chapters}</Typography>
        <Typography variant='body2' color='textSecondary' component='p'>{synopsis}</Typography>
          <Typography variant='body2' color='textSecondary' component='p'>{continuing}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button href={url} target='_blank' size='small' color='primary'>Look here</Button>
        <Typography varaint='h5' color='textSecondary'>{i + 1}</Typography>
      </CardActions>
      </Card>

  )
}

export default AnimeCard
