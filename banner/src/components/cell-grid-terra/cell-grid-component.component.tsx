import React from 'react'
import CellGrid, { Cell } from 'terra-cell-grid'
import Grid from 'terra-grid'
import ItemDisplay from 'terra-clinical-item-display'
import classes from './cell-grid-component.component.css'
import PatientBanner from '../../model/patient-banner.model'

interface state {
  id?: any
  name?: any
  gender?: any
  age?: any
  birthDate?: any
  lengthStay?: any
  ed?: any
  allergies?: any
  eID?: any
  triage?: any
  risks?: any
}

class PatientBannerComponent extends React.Component<{}, state> {
  constructor(props) {
    super(props)
    this.state = {
      id: undefined,
      name: undefined,
      gender: undefined,
      age: undefined,
      birthDate: undefined,
      lengthStay: undefined,
      ed: undefined,
      allergies: undefined,
      eID: undefined,
      triage: undefined,
      risks: undefined
    }
  }

  readURL = async () => {
    await fetch(`http://localhost:8080/patient-banner/data`)
      .then((response) => response.json())
      .then((response) => {
        let patientBanner = new PatientBanner(
          response.id,
          response.name,
          response.gender,
          response.age,
          response.birthDate,
          response.lengthStay,
          response.ed,
          response.allergies,
          response.eID,
          response.triage,
          response.risks
        )
        this.setState({
          id: (
            <ItemDisplay
              className={classes.leftText}
              text={`${patientBanner.gender} ${patientBanner.age}yrs (${patientBanner.birthDate}) ${patientBanner.ID}`}
              textStyle='secondary'
            />
          ),
          name: (
            <ItemDisplay
              className={classes.leftText}
              text={`🏴 ${patientBanner.name}`}
              textStyle='strong'
            />
          ),
          lengthStay: (
            <ItemDisplay
              className={classes.rightText}
              text={`Length of stay: ${patientBanner.lengthStay}`}
              textStyle='secondary'
            />
          ),
          ed: (
            <ItemDisplay
              className={classes.rightText}
              text={`ED: ${patientBanner.ed}`}
              textStyle='secondary'
            />
          ),
          allergies: (
            <ItemDisplay
              className={classes.leftText}
              text={`Allergies: ${patientBanner.allergies}`}
              textStyle='secondary'
            />
          ),
          eID: (
            <ItemDisplay
              className={classes.leftText}
              text={`Encounter ID: ${patientBanner.eID}`}
              textStyle='secondary'
            />
          ),
          triage: (
            <ItemDisplay
              className={classes.paperText}
              text={`${patientBanner.triage}`}
              textStyle='secondary'
            />
          ),
          risks: (
            <ItemDisplay
              className={classes.paperText}
              text={`${patientBanner.risks}`}
              textStyle='secondary'
            />
          )
        })
      })
  }

  componentDidMount() {
    this.readURL()
  }

  render() {
    return (
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
              <Grid.Row>{this.state.name}</Grid.Row>
              <Grid.Row>{this.state.id}</Grid.Row>
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
                {this.state.lengthStay}
              </Grid.Row>
              <Grid.Row style={{ justifyContent: 'flex-end' }}>
                {this.state.ed}
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
              {this.state.allergies}
            </Grid.Row>
            <Grid.Row>{this.state.eID}</Grid.Row>
          </Grid>
        </Cell>
        <Cell
          key='triage'
          className={classes.paper}
          width={{ static: { value: 50, unit: 'px' } }}
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
              {this.state.triage}
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
              {this.state.risks}
            </Grid.Row>
          </Grid>
        </Cell>
        <Cell key='blank'>
          <Grid></Grid>
        </Cell>
      </CellGrid>
    )
  }
}

export default PatientBannerComponent
