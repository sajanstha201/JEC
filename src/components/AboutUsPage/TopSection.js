import styled from "styled-components";
import jecaboutimg from "../../media/images/jec-about.png";
import { Link } from "react-router-dom";

const BackDivImg = styled.div`
  background-image: url(${jecaboutimg});
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100%;
  background-attachment: fixed;
`;

function TopSection() {
  return (
    <>
      <div className="font-sans text-2xl">
        <BackDivImg>
          <h1 className="flex w-[40%] justify-start text-4xl md:justify-start z-10">
            About Us
          </h1>
        </BackDivImg>

        <div className="w-[96%] mx-auto">
          <ul className="flex md:justify-start justify-center">
            <li>
              <Link to="/">HomePage</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default TopSection;
