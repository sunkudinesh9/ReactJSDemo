import React, { useState } from "react";
import logo from "./logo.svg";
import Icon from "./components/Icon";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const iteamArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    iteamArray.fill("empty");
  };

  const checkIsWinner = () => {
    if (iteamArray[0] === iteamArray[1] &&
      iteamArray[0] === iteamArray[2] &&
      iteamArray[0] !== "empty"
    ) {
      setWinMessage(`${iteamArray[0]} is winner`)
    } else if (iteamArray[3] === iteamArray[4] &&
      iteamArray[3] === iteamArray[5] &&
      iteamArray[3] !== "empty") {
      setWinMessage(`${iteamArray[3]} is winner`)
    } else if (iteamArray[6] === iteamArray[7] &&
      iteamArray[6] === iteamArray[8] &&
      iteamArray[6] !== "empty") {
      setWinMessage(`${iteamArray[6]} is winner`)
    } else if (iteamArray[0] === iteamArray[4] &&
      iteamArray[0] === iteamArray[8] &&
      iteamArray[0] !== "empty") {
      setWinMessage(`${iteamArray[0]} is winner`)
    } else if (iteamArray[2] === iteamArray[4] &&
      iteamArray[2] === iteamArray[6] &&
      iteamArray[2] !== "empty") {
      setWinMessage(`${iteamArray[2]} is winner`)
    } else if (iteamArray[0] === iteamArray[3] &&
      iteamArray[0] === iteamArray[6] &&
      iteamArray[0] !== "empty") {
      setWinMessage(`${iteamArray[0]} is winner`)
    } else if (iteamArray[1] === iteamArray[4] &&
      iteamArray[1] === iteamArray[7] &&
      iteamArray[1] !== "empty") {
      setWinMessage(`${iteamArray[1]} is winner`)
    } else if (iteamArray[2] === iteamArray[5] &&
      iteamArray[2] === iteamArray[8] &&
      iteamArray[2] !== "empty") {
      setWinMessage(`${iteamArray[2]} is winner`)
    }
  };

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (iteamArray[itemNumber] === "empty") {
      iteamArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross);
    } else {
      return toast("Already filled", { type: "error" })
    }
    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-center text-center">
                {winMessage}
              </h1>
              <Button
                color="success"
                bock
                onClick={reloadGame}
              >Reload</Button>
            </div>
          ) : (
              <h1 className="text-center text-warning">
                {isCross ? "cross" : "circle"} turn
              </h1>
            )}
          <div className="grid">
            {iteamArray.map((item, index) => (
              <Card color="warning" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon shap={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
