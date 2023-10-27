import Brandicon from "../BrandIcon";
import Button from "../Button";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        {/* row cols */}
        <div className="row">
          <div className="col">
            <Brandicon />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          {/* column 1 */}
          <div className="col-2 mr-5" style={{ width: "250px" }}>
            <h6 className="mt-2 text-start">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button className="d-block" type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button className="d-block" type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button className="d-block" type="link" href="/use-payment">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          {/* column 2 */}
          <div className="col-2 mr-5">
            <h6 className="mt-2 text-start">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button className="d-block" type="link" href="/carrer">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button className="d-block" type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button className="d-block" type="link" href="/term-condition">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          {/* column 3 */}
          <div className="col-3">
            <h6 className="mt-2 text-start">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  className="d-block"
                  type="link"
                  href="mailto:support@staycation.id"
                >
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button
                  className="d-block"
                  type="link"
                  href="tel:+622122081996"
                >
                  021 - 2208 - 1996
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Kemang, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        {/* copyright */}
        <div className="copyright w-100">
          <span className="d-inline-block">
            Copyright 2019 • All rights reserved • Staycation
          </span>
        </div>
      </div>
    </footer>
  );
}
