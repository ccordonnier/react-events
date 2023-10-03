import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Alert from 'react-bootstrap/Alert';

function AutohideAlert(props) {
  const alerts = useSelector(state => state.alerts);
  const dispatch = useDispatch();
  return (
          alerts.map(alert => {
            return(
            <Alert variant={alert.type.toLowerCase()} onClose={() => dispatch({ type:"alerts/removeAlert", payload: alert.id})} dismissible style={{position:"absolute",right:"20px", top:"20px",width:"20vw"}}>
              <Alert.Heading>
                {alert.title}
              </Alert.Heading>
              <p>
                {alert.text}
              </p>
            </Alert>)
          })
  );
}

export default AutohideAlert;