import Alert, {AlertProps} from 'react-bootstrap/Alert';

interface AppAlertProps extends AlertProps {
  message: string
}

function AppAlert(props: AppAlertProps) {
  return (
    <>
      <Alert key={props.variant} variant={props.variant} style={{borderRadius: "10px"}}>
        {props.message}
      </Alert>
    </>
  );
}

export default AppAlert;