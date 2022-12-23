import Alert from 'react-bootstrap/Alert';

function BasicExample() {
  return (
    <>
      {['warning'].map((variant) => (
        <Alert key={variant} variant={variant} style={{
          marginTop: "60px",
          width: "900px"
        }}>
          No codes selected yet.
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;