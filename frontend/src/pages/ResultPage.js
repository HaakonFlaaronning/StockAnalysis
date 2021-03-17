import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import ResultTab from "../components/ResultTab";

const ResultPage = () => {
  const [data, setData] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (noMetrics) => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:5000/totdata/${noMetrics}`, {
        headers: {
          Accept: "application/json",
        },
        method: "GET",
      });
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Container className="container pt-5">
      <Tabs
        className="mb-5"
        defaultActiveKey="one"
        onSelect={(k) => {
          fetchData(k);
        }}
      >
        <Tab eventKey="1" title="One"></Tab>
        <Tab eventKey="2" title="Two"></Tab>
        <Tab eventKey="3" title="Three"></Tab>
        <Tab eventKey="4" title="Four"></Tab>
        <Tab eventKey="5" title="Five"></Tab>
      </Tabs>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <ResultTab data={data} />}
    </Container>
  );
};

export default ResultPage;
