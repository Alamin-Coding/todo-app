import { useState } from "react"
import { Button, Col, Container, FloatingLabel, Row, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTodo } from "../store/slices/TodoSlice";
import MainMenu from "../components/Navbar";



const Edit = () => {
  const index = useParams();
  const {id} = index
  const allData = useSelector((state) => state.todoList)
  // console.log(id);
  // console.log(allData[id]);

  const [updateText, setUpdateText] = useState(allData[id]);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleUpdate = (id) => {
    if (updateText) {
      dispatch(updateTodo([updateText, id]))
      navigate("/");
    }else{
      alert("You must add something")
    }
    
  }

  return (
    <div>
      <MainMenu></MainMenu>
      <h1>Edit Page</h1>
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
                <Form.Control onChange={(e) => setUpdateText(e.target.value)} type="text" placeholder="Write Your List" value={updateText} />
              </FloatingLabel>
            </div>
          </Col>
          <Col md={2}>
            <div>
              <Button onClick={() => handleUpdate(id)} className="btn btn-primary py-3 px-4">Update</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default Edit
