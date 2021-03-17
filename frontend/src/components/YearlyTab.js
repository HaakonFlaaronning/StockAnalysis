import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const YearlyTab = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData(props.data);
  }, [props.noMetrics]);

  return (
    <Container>
      <h2 className="mb-3 mt-4">Metrics: {props.metrics}</h2>
      <Row className="pb-2">
        <Col>
          <h3>Row</h3>
        </Col>
        <Col>
          <h3>Year</h3>
        </Col>
        <Col>
          <h3>Average return (%)</h3>
        </Col>
      </Row>
      {data.length > 0 &&
        data.map((item, index) => (
          <Row className="pb-2">
            <Col>{index + 1}</Col>
            <Col>{item.year}</Col>
            <Col>
              <Link to={{ pathname: "/selected", state: { yearlyid: item.yearlyid, metrics: props.metrics } }}>
                {item.avgreturn}
              </Link>
            </Col>
          </Row>
        ))}
    </Container>
  );
};

export default YearlyTab;
