import React from 'react'
import '../../assets/style/dashboard.scss'


export const Container = props => {

  return(
    <div className={'container'} style={props.style}>
      <div>
        <div className={'title border-bottom-common'}>
          <h1>{props.title}</h1>
        </div>
        {props.children}
      </div>
    </div>
  );
}

