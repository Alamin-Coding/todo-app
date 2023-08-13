import { Button, Col, Container, ListGroup, Row } from "react-bootstrap"
import {MdOutlineDeleteSweep} from 'react-icons/md'
import {AiOutlineDeleteRow, AiOutlineUpload} from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/slices/TodoSlice";
import { clearAllData } from "../store/actions";  //extraReducers with action creator
import { useNavigate } from "react-router-dom";








const List = () => {
  const data = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleDelete = (index) => {  
    dispatch(deleteTodo(index))
  }

  const handleUpdate = (index) => {  
    navigate(`/edit/${index}`)
  }
  const handleDeleteAll = () => {     //extraReducers with action creator
    dispatch(clearAllData())
  }

  return (
    <section>
      <Container>
       <Row>
        <Col md={12} className="m-auto">
         <h2>Your List {data.length}</h2>
         <ListGroup>
          {
            data.map((item, index) => {
              return (
                <ListGroup.Item key={item} className="d-flex justify-content-between align-items-center">
                  <p>{item}</p>

                  <div className="d-flex gap-2">
                  <Button onClick={() => handleUpdate(index)} className="btn btn-info text-white"><AiOutlineUpload /> Update</Button>

                  <Button onClick={() => handleDelete(index)} className="btn btn-danger"><AiOutlineDeleteRow /> Delete</Button>
                  </div>
                </ListGroup.Item>
              )
            })
          }
        </ListGroup>
        <div className="py-2 text-end">
          {data.length > 0 && <Button className="btn btn-danger py-3 px-5" onClick={() => handleDeleteAll()}><MdOutlineDeleteSweep /> Delete all</Button>}
        </div>
        </Col>
       </Row>
      </Container>
    </section>
  )
}

export default List
