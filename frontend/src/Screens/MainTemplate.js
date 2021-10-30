import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainTemplate = () => {
  return (
    <>
      <Container className="mt-5">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Templates</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Temp1</td>
              <td>
                <Link to="/Templates/temp1" target="_blank">
                  temp1
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Temp2</td>
              <td>
                {" "}
                <Link to="/Templates/temp2" target="_blank">
                  temp2
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default MainTemplate;
