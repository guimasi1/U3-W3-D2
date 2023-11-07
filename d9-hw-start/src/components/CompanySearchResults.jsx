import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { getJobsAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import MyNavbar from "./MyNavbar";

const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([]);
  console.log("ciao");
  const params = useParams();
  console.log(params, "params");
  const jobs = useSelector((state) => state.listOfJobs.jobsList);
  const dispatch = useDispatch();
  console.log(jobs, "jobs");

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    // getJobs();
    console.log(baseEndpoint, params, "BASEPOINT e params");
    dispatch(getJobsAction(baseEndpoint, params));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const getJobs = async () => {
  //   try {
  //     const response = await fetch(baseEndpoint + params.company);
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       setJobs(data);
  //       console.log(data, "HEY DATA HERE");
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      <MyNavbar />
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
