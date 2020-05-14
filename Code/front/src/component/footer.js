import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css";

const FooterPagePro = () => {
  return (
    <MDBFooter color="mdb-color" className="font-small pt-4 mt-4"   >
      <MDBContainer className="text-center text-md-left" >
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="2" xl="3" className="mx-auto mt-3">
            <img id="DeepPocketLogo" src={require(`../images/DeepPocket.png`)} />
          </MDBCol>
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Deep Pocket
            </h6>
            <p>
              We are committed to help everyone become smarter about money by always delivering the best products .
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          {/* <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a href="#!">Acountant Software</a>
            </p>
            <p>
              <a href="#!">Changer</a>
            </p>
            <p>
              <a href="#!">Electronic Money</a>
            </p>
            <p>
              <a href="#!">VISA CARD info</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" /> */}
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3" style={{ color: 'white' }}>
            <h6 className="text-uppercase mb-4 font-weight-bold usefullLinks">
              Useful links
            </h6>
            <p>
              <a className="codi-website" href="https://codi.tech/" target="_blank" >Codi Website</a>
            </p>
            <p>
              <a href="https://codi.tech/the-programme/" target="_blank">Apply to Codi's Core Programme</a>
            </p>
            <p>
              <a href="https://codi.tech/computer-literacy/" target="_blank">Apply to Codi's Computer Literacy Programme</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" />Beirut,Codi, LB
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@codi.tech
            </p>
            <p>
              <i className="fa fa-phone mr-3" />  +961 78 940 942
            </p>
            <p>
              <i className="fa fa-clock mr-3" /> Monday to Friday,<br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; from 9am to 6pm
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href=""> Financial Tracker </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="https://www.facebook.com/coditechlb/"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="https://twitter.com/codi_tech"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="https://www.instagram.com/codi_tech/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="https://www.linkedin.com/school/codi.tech/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter >
  );
}

export default FooterPagePro;