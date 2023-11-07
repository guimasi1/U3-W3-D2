import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MyNavbar from "./MyNavbar";
import { Link } from "react-router-dom";
import { removeFavouriteJobAction } from "../redux/actions";

const Favourites = () => {
  const favouriteJobs = useSelector((state) => {
    return state.favouriteJobs.jobs;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <MyNavbar />
      <Container className="mt-5">
        <Row>
          <Col>
            <h4 className="text-center fw-bold fs-1">FAVOURITE JOBS</h4>
            {favouriteJobs.map((job) => {
              return (
                <Row
                  key={job.data._id}
                  className="mb-2 border py-2 rounded align-items-center "
                >
                  <Col>
                    <Link to={`/${job.data.company_name}`}>
                      {job.data.company_name}
                    </Link>
                  </Col>
                  <Col>
                    <a href={job.data.url} target="_blank" rel="noreferrer">
                      {job.data.title}
                    </a>
                  </Col>
                  <Col className="text-end">
                    <Button
                      variant="danger"
                      onClick={() => {
                        // removeFavouriteJob({
                        //   type: "REMOVE_FAVOURITE_JOB",
                        //   payload: job.data._id,
                        // });
                        dispatch(removeFavouriteJobAction(job));
                      }}
                    >
                      {" "}
                      Remove
                    </Button>
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Favourites;
