import React from 'react'
import { withTaskContext } from '@twilio/flex-ui';

const ApaleoFlexComponent = (props) => {

  let apaleoURL = `https://app.apaleo.com/MUC/reservations/`
 return (
  <div style="height:100%;">
    <iframe src={apaleoURL} height="100vh" width="100%" frameborder="0" />
  </div>
 )
}

export default withTaskContext(ApaleoFlexComponent)
