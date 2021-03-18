import React, { useEffect, useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import ResultTab from "../components/ResultTab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ResultPage = () => {
  const [data, setData] = useState([]);
  const [noMetrics, setNoMetrics] = useState(1);
  const [fromYear, setFromYear] = useState(2000);
  const [toYear, setToYear] = useState(2019);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (numMetrics) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:5000/totdata/${numMetrics}?yearFrom=${fromYear}&yearTo=${toYear}`,
        {
          headers: {
            Accept: "application/json",
          },
          method: "GET",
        }
      );
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <Container className="container pt-5">
      <TextField
        id="outlined-basic"
        label="From year"
        variant="outlined"
        onChange={(event) => {
          setFromYear(parseInt(event.target.value));
        }}
      />
      <TextField
        className="pb-3"
        id="outlined-basic"
        label="To year"
        variant="outlined"
        onChange={(event) => {
          setToYear(parseInt(event.target.value));
        }}
      />
      <Button
        onClick={() => {
          fetchData(noMetrics);
        }}
        variant="contained"
        color="primary"
        size="large"
        className="ml-3"
      >
        Submit
      </Button>

      <Tabs
        className="mb-5"
        defaultActiveKey="one"
        onSelect={async (k) => {
          setNoMetrics(k);
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
      {!isLoading && <ResultTab data={data} fromYear={fromYear} toYear={toYear} />}
    </Container>
  );
};

export default ResultPage;
