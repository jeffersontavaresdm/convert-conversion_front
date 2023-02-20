import Spinner from 'react-bootstrap/Spinner';

const AppSpinner = () => {
  return (
    <Spinner
      animation="border"
      variant="primary"
      role="status"
      style={ { width: "100px", height: "100px" } } >
      <span className="visually-hidden" >Loading...</span >
    </Spinner >
  );
}

export default AppSpinner;