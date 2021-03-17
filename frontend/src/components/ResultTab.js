import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ResultTab = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData(props.data);
  }, [props.noMetrics]);

  return (
    <Container fluid>
      <Row className="pb-2">
        <Col lg={2}>
          <h3>Row</h3>
        </Col>
        <Col lg={6}>
          <h3>Metrics</h3>
        </Col>
        <Col lg={4}>
          <h3>Average return (%)</h3>
        </Col>
      </Row>
      {data.length > 0 &&
        data.map((item, index) => (
          <Row className="pb-2">
            <Col lg={2}>{index + 1}</Col>
            <Col lg={6}>
              <Link to={{ pathname: "/yearly", state: { resid: item.resultid, metrics: item.metrics } }}>
                {item.metrics}
              </Link>
            </Col>
            <Col lg={4}>{item.avgreturn}</Col>
          </Row>
        ))}
    </Container>
  );
};

export default ResultTab;
