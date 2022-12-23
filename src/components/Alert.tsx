import Alert from 'react-bootstrap/Alert';

function BasicExample() {
  return (
    <>
      {['danger'].map((variant) => (
        <Alert key={variant} variant={variant} style={{
          marginTop: "60px",
          width: "900px"
        }}>
          Error. The chosen currency type does not exist.
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;