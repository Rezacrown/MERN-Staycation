import Stars from "../Stars";

export default function Testimonial() {
  return (
    <div className="" style={{ height: "300px" }}>
      {/* <Stars value={3.5} height={35} width={35} spacing={4}></Stars> */}
      <Stars maxRating={5} rating={3.4} height={35} width={35} spacing={4} />
    </div>
  );
}
