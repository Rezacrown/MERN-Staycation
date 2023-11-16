export default function Properties_Information() {
  return (
    <div data-id="properties-information" className="">
      <img src="/image/img-categories-1.jpg" width={420} height={270} alt="" />
      <div className="mt-3 d-flex justify-content-between">
        <div className="">
          <h4 style={{ fontSize: 20, color: "#152C5B" }}>Podo Wae</h4>
          <p
            style={{ color: "#B0B0B0", fontSize: "15px" }}
            className="fw-light"
          >
            Madiun, Indonesia
          </p>
        </div>
        <div className="">
          <h5 style={{ color: "#152C5B", fontSize: "16px" }}>
            $480 USD{" "}
            <span
              style={{
                color: "#B0B0B0",
                lineHeight: "170%",
                fontWeight: 300,
              }}
            >
              per
            </span>{" "}
            2 nights
          </h5>
        </div>
      </div>
    </div>
  );
}
