export default function Payment_Information() {
  return (
    <section>
      {/* pay informartion */}
      <div className="">
        <h5 className="" style={{ color: "#152C5B", fontSize: "16px" }}>
          Payment Information:{" "}
        </h5>
        <h5 className="mt-3" style={{ color: "#152C5B", fontSize: "16px" }}>
          Tax: <span className="fw-normal">10%</span>
        </h5>
        <h5 className="" style={{ color: "#152C5B", fontSize: "16px" }}>
          Subtotal: <span className="fw-normal">$480 usd</span>
        </h5>
        <h5 className="" style={{ color: "#152C5B", fontSize: "16px" }}>
          Total: <span className="fw-normal">$480 usd</span>
        </h5>
      </div>
      {/* bank */}
      <div className="my-5">
        <div data-bank="BCA" className="row mt-3">
          <div className="col-4">
            <img className="d-block" src="/image/bank-bca.jpg" alt="" />
          </div>
          <div className="col-6 mx-auto">
            <h5 className="" style={{ color: "#152C5B", fontSize: "16px" }}>
              Bank central asia
            </h5>
            <h5 className="" style={{ color: "#152C5B", fontSize: "16px" }}>
              2208 1996
            </h5>
            <h5 className="" style={{ color: "#152C5B", fontSize: "16px" }}>
              BuildWith Angga
            </h5>
          </div>
        </div>
        <div data-bank="MANDIRI" className="row mt-3">
          <div className="col-4">
            <img className="d-block" src="/image/bank-mandiri.jpg" alt="" />
          </div>
          <div className="col-6 mx-auto">
            <h5 className="" style={{ color: "#152C5B", fontSize: "16px" }}>
              Bank Mandiri
            </h5>
            <h5 className="" style={{ color: "#152C5B", fontSize: "16px" }}>
              2208 1996
            </h5>
            <h5 className="" style={{ color: "#152C5B", fontSize: "16px" }}>
              BuildWith Angga
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
