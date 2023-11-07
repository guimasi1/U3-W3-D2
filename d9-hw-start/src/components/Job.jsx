import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
const Job = ({ data }) => {
  const dispatch = useDispatch();
  console.log(data);
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={4}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={4}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={{ span: 2, offset: 2 }}>
        <Button
          onClick={() => {
            dispatch({
              type: "ADD_TO_FAVOURITES",
              payload: {
                data,
              },
            });
          }}
        >
          Add to favourites
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
