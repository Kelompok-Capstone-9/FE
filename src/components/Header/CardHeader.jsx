import { NavLink } from "react-bootstrap";
import "./HeadearLanding.css";
const CardHeader = ({ icon, header, paragraph, destination }) => {
  return (
    <>
      <NavLink to={destination}>
        <div className="cardHeader rounded-3" style={{ width: "15vw" }}>
          <div className="row ">
            <div className="col-3  mt-2">{icon}</div>
            <div className="col-9">
              <p className="m-0 fs-6 fw-bold text-black">{header}</p>
              <p className="text-black">{paragraph}</p>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};
export default CardHeader;
