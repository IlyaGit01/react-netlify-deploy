import React from 'react'
import '../../assets/style/dashboard.scss'
import { Container } from '../common/container'

export const UserGraph = () => {

  const style = {
    width: '620px',
    height: '350px',
  }

  return(
    <Container style={style}>
      <div className={'user-graph'}>
        <div className={'row-date-inputs border-bottom-common'}>
          <div>
            <input className={'date-input'}/>
            <input className={'date-input'}/>
            <button className={'date-calendar'}>pp</button>
          </div>
            <button className={'full-report'}>View full Report</button>
        </div>
      </div>
    </Container>
  );
}
