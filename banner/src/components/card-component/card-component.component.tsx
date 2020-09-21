import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// import ButtonBase from '@material-ui/core/ButtonBase'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 1px 2px 1px',
      flexGrow: 1,
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      position: 'fixed',
      backgroundColor: 'lightBlue',
      marginTop: theme.spacing(1),
      borderRadius: '15px',
      display: 'flex'
    },
    paper: {
      padding: '2px 5px 2px 5px',
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    left: {
      padding: '2px 5px 2px 5px',
      textAlign: 'left',
      color: theme.palette.text.secondary,
      paddingRight: '10px'
    },
    right: {
      padding: '2px 5px 2px 5px',
      textAlign: 'right',
      color: theme.palette.text.secondary
    },
    image: {
      width: '50px',
      height: '50px'
    },
    img: {
      margin: 'round',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius: '30px 30px',
      marginLeft: theme.spacing(2)
    },
    oneLineStyle: {
      flexDirection: 'row',
      justifyContent: 'flex-start'
    }
  })
)

export default function PatientBanner() {
  const classes = useStyles()

  return (
    <Grid
      container
      spacing={0}
      justify='flex-start'
      alignItems='flex-start'
      direction='row'
      className={classes.root}
    >
      <Grid item>
        <Grid item xs direction='column'>
          <div className={classes.image}>
            <img
              className={classes.img}
              alt='complex'
              src='https://i.pinimg.com/originals/a6/c9/50/a6c950b115e5719a22fc1f866fffc21e.jpg'
            />
          </div>
        </Grid>
      </Grid>
      <Grid item className={classes.left}>
        <Grid item xs direction='column'>
          <Typography variant='caption' color='textPrimary' gutterBottom>
            🏴Bruno Mertens
          </Typography>
        </Grid>
        <Grid item xs direction='column'>
          <Typography variant='caption' color='textSecondary'>
            M 42yrs (13.07.1977) ID: 1030114
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.right}
        style={{
          borderRight: '1',
          borderRightColor: 'white',
          borderRightStyle: 'solid',
          borderWidth: '1px',
          marginLeft: '10%'
        }}
      >
        <Grid item xs direction='column'>
          <Typography variant='caption' color='textSecondary'>
            Length of Stay: 03:43
          </Typography>
        </Grid>
        <Grid item xs direction='column'>
          <Typography variant='caption' color='textSecondary'>
            ED 302
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.left}
        style={{
          borderRight: '1',
          borderRightColor: 'white',
          borderRightStyle: 'solid',
          borderWidth: '1px'
        }}
      >
        <Grid
          item
          xs
          direction='column'
          style={{
            borderBottom: '1',
            borderBottomColor: 'white',
            borderBottomStyle: 'solid',
            borderWidth: '1px'
          }}
        >
          <Typography
            className={classes.oneLineStyle}
            variant='caption'
            color='textSecondary'
          >
            Allergies(3):{' '}
            <Typography variant='button' color='error' gutterBottom>
              PENICILINE
            </Typography>
            , Bee Venom, Latex
          </Typography>
        </Grid>
        <Grid xs item direction='column'>
          <Typography variant='caption' color='textSecondary'>
            Encounter ID: 392719372
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.paper}
        spacing={0}
        style={{
          borderRight: '1',
          borderRightColor: 'white',
          borderRightStyle: 'solid',
          borderWidth: '1px'
        }}
      >
        <Grid item xs direction='column'>
          <Typography variant='caption' color='textSecondary'>
            Triage
          </Typography>
        </Grid>
        <Grid item xs direction='column'>
          <Typography variant='caption' color='textSecondary'>
            -
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.paper}
        spacing={0}
        style={{
          borderRight: '1',
          borderRightColor: 'white',
          borderRightStyle: 'solid',
          borderWidth: '1px'
        }}
      >
        <Grid item xs direction='column'>
          <Typography variant='caption' color='textSecondary'>
            Risks
          </Typography>
        </Grid>
        <Grid item xs direction='column'>
          <Typography variant='caption' color='textSecondary'>
            🏥🧠🙎‍♂️
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
