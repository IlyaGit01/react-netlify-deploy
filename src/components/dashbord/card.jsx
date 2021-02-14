import React, { useEffect, useState } from 'react'
import '../../assets/style/dashboard.scss'

export const Card = props => {

  const [flag, setFlag] = useState(false)

  return(
    <div className={'card'}>
      <span className={'card-title'}>Hello</span>
      <h1 className={'card-value'}>29</h1>
      <h4>19</h4>
    </div>
  );
}
