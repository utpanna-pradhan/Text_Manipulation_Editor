import React from 'react';

function Alert(props) {
  /*const capitalize = () => {
        const lower = (props.alert.type).toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);

  }*/
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
            <strong> {props.alert.type} </strong>: {props.alert.message}
            
        </div>
   
  )
}

export default Alert