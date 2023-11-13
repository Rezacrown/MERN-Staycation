export default function title_checkout(props: TitleCheckoutProps) {
  // payment title
  if (props.type === "payment") {
    return (
      <div className="text-center mt-5">
        <h2
          className="fw-bold"
          style={{
            color: "#152C5B",
            fontSize: "36px",
          }}
        >
          Payment
        </h2>
        <h5
          className="mt-3 fw-light"
          style={{ color: "#B0B0B0", fontSize: "18px" }}
        >
          Kindly follow the instructions below
        </h5>
      </div>
    );
  }

  // booking title
  return (
    <div className="text-center mt-5">
      <h2
        className="fw-bold"
        style={{
          color: "#152C5B",
          fontSize: "36px",
        }}
      >
        Booking Information
      </h2>
      <h5
        className="mt-3 fw-light"
        style={{ color: "#B0B0B0", fontSize: "18px" }}
      >
        Please fill up the blank fields below
      </h5>
    </div>
  );
}

interface TitleCheckoutProps {
  //   title?: string;
  //   subTitle?: string;
  type: "payment" | "booking";
}
