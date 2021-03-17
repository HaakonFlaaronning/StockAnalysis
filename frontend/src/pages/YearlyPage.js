import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import YearlyTab from "../components/YearlyTab";
import Button from "@material-ui/core/Button";

const YearlyPage = (props) => {
  const [data, setData] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (resid) => {
    try {
      console.log(resid);
      setIsLoading(true);
      const response = await fetch(`http://localhost:5000/yeardata/${resid}`, {
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

  useEffect(() => {
    fetchData(props.history.location.state.resid);
  }, []);

  return (
    <Container className="container pt-3">
      <Button
        onClick={() => {
          console.log(props.history.goBack());
        }}
        variant="contained"
        color="primary"
        size="large"
        className="ml-3"
      >
        GO BACK
      </Button>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <YearlyTab metrics={props.history.location.state.metrics} data={data} />}
    </Container>
  );
};

export default YearlyPage;
