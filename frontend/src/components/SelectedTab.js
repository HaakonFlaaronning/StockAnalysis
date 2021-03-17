import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

const SelectedTab = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.data);
  }, [props.noMetrics]);

  return (
    <Container>
      <h2 className="mb-3 mt-4">Metrics: {props.metrics}</h2>
      <Row className="pb-2">
        <Col lg={2}>
          <h3>Row</h3>
        </Col>
        <Col>
          <h3>Ticker</h3>
        </Col>
        <Col>
          <h3>Date</h3>
        </Col>
        <Col>
          <h3>One year return (%)</h3>
        </Col>
      </Row>
      {data.length > 0 &&
        data.map((item, index) => (
          <Row className="pb-2">
            <Col lg={2}>{index + 1}</Col>
            <Col>{item.ticker}</Col>
            <Col>{item.date.substr(0, 10)}</Col>
            <Col>{item.oneyearreturn}</Col>
          </Row>
        ))}
    </Container>
  );
};

export default SelectedTab;
