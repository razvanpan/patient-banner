import React from 'react'
import CellGrid, { Cell } from 'terra-cell-grid'
import Grid from 'terra-grid'
import ItemDisplay from 'terra-clinical-item-display'
import classes from './cell-grid-component.component.css'

const CellGridComponent = () => (
  <CellGrid className={classes.root}>
    <Cell
      key='img'
      width={{ static: { value: 40, unit: 'px' } }}
      style={{ justifyContent: 'center' }}
    >
      <div className={classes.image}>
        <img
          className={classes.img}
          alt='complex'
          src='https://i.pinimg.com/originals/a6/c9/50/a6c950b115e5719a22fc1f866fffc21e.jpg'
        />
      </div>
    </Cell>
    <Cell
      className={classes.left}
      key='name'
      width={{ static: { value: 300, unit: 'px' } }}
    >
      <div>
        <Grid className={classes.left}>
          <Grid.Row>
            <ItemDisplay
              className={classes.leftText}
              text='🏴Bruno Mertens'
              textStyle='strong'
            />
          </Grid.Row>
          <Grid.Row>
            <ItemDisplay
              className={classes.leftText}
              text='M 42yrs (13.07.1977) ID: 1030114'
              textStyle='secondary'
            />
          </Grid.Row>
        </Grid>
      </div>
    </Cell>
    <Cell key='stay' width={{ static: { value: 230, unit: 'px' } }}>
      <div className={classes.right}>
        <Grid
          className={classes.borderRight}
          style={{
            justifyContent: 'flex-end'
          }}
        >
          <Grid.Row style={{ justifyContent: 'flex-end' }}>
            <ItemDisplay
              className={classes.rightText}
              text='Length of Stay: 03:43'
              textStyle='secondary'
            />
          </Grid.Row>
          <Grid.Row style={{ justifyContent: 'flex-end' }}>
            <ItemDisplay
              className={classes.rightText}
              text='ED 302'
              textStyle='secondary'
            />
          </Grid.Row>
        </Grid>
      </div>
    </Cell>
    <Cell
      key='allergies'
      className={classes.left}
      width={{ static: { value: 280, unit: 'px' } }}
    >
      <Grid className={classes.borderRight}>
        <Grid.Row className={classes.borderBottom}>
          <ItemDisplay
            className={classes.leftText}
            text='Allergies(3):  '
            textStyle='secondary'
          />
          <ItemDisplay
            className={classes.leftText}
            style={{ backgroundColor: 'white' }}
            text=' Peniciline'
            textStyle='attention'
          />
          <ItemDisplay
            className={classes.leftText}
            text=', Bee Venom, Latex'
            textStyle='secondary'
          />
        </Grid.Row>
        <Grid.Row>
          <ItemDisplay
            className={classes.leftText}
            text='Encounter ID: 392719372'
            textStyle='secondary'
          />
        </Grid.Row>
      </Grid>
    </Cell>
    <Cell
      key='triage'
      className={classes.paper}
      width={{ static: { value: 30, unit: 'px' } }}
    >
      <Grid
        className={classes.borderRight}
        style={{
          justifyContent: 'center'
        }}
      >
        <Grid.Row style={{ justifyContent: 'center' }}>
          <ItemDisplay
            text='Triage'
            textStyle='secondary'
            className={classes.paperText}
          />
        </Grid.Row>
        <Grid.Row style={{ justifyContent: 'center' }}>
          <ItemDisplay
            text='-'
            textStyle='secondary'
            className={classes.paperText}
          />
        </Grid.Row>
      </Grid>
    </Cell>
    <Cell
      key='risks'
      className={classes.paper}
      width={{ static: { value: 50, unit: 'px' } }}
    >
      <Grid className={classes.borderRight}>
        <Grid.Row style={{ justifyContent: 'center' }}>
          <ItemDisplay
            className={classes.paperText}
            text='Risks'
            textStyle='secondary'
          />
        </Grid.Row>
        <Grid.Row style={{ justifyContent: 'center' }}>
          <ItemDisplay
            lassName={classes.paperText}
            text='🏥🧠🙎‍♂️'
            textStyle='secondary'
          />
        </Grid.Row>
      </Grid>
    </Cell>
    <Cell key='blank'>
      <Grid></Grid>
    </Cell>
  </CellGrid>
)
export default CellGridComponent
