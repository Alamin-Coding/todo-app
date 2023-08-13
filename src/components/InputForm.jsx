import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/TodoSlice";

import { useState } from "react";



const InputForm = () => {
  const [text, setText] = useState(null);
  const dispatch = useDispatch();

  const handleList = (list) => {
    if (text) {
      dispatch(addTodo(list));
    }
  }

  return (
    <section className="my-5">
      <Container>
        <Row>
          <Col md={10}>
            <div>
              <FloatingLabel
                controlId="floatingInput"
                label="Write Your List"
                className="mb-3"
              >
                <Form.Control onChange={(e) => setText(e.target.value)} type="text" placeholder="Write Your List" />
              </FloatingLabel>
            </div>
          </Col>
          <Col md={2}>
            <div>
              <Button onClick={() => handleList(text)} className="btn btn-primary py-3 px-4">Add List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InputForm;
