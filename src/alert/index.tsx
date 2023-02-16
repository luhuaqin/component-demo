import React from "react";

interface IAlertProps {
  kind?: 'info' | 'positive' | 'negative' | 'warning'
}

const Alert: React.FC<IAlertProps> = () => {
  return (
    <div>111</div>
  )
}

export default Alert
