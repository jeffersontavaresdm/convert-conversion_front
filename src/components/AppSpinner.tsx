import Spinner from 'react-bootstrap/Spinner';

const AppSpinner = () => {
  return (
    <Spinner animation="border" variant="primary" role="status" style={{marginLeft: "300px", marginBottom: "200px"}}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default AppSpinner;