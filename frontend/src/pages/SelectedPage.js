import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import SelectedTab from "../components/SelectedTab";
import Button from "@material-ui/core/Button";

const SelectedPage = (props) => {
  const [data, setData] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (yearlyid) => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:5000/selected/${yearlyid}`, {
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
    fetchData(props.history.location.state.yearlyid);
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
      {!isLoading && <SelectedTab metrics={props.history.location.state.metrics} data={data} />}
    </Container>
  );
};

export default SelectedPage;
