// import "@testing-library/jest-dom";
// import { expect } from "vitest";
// import { render, fireEvent } from "@testing-library/react";
// import { useState } from "react";
// import InputDate from "./index";

// // definie test component for reusable test
// export function TestInput() {
//   const [, setDateData] = useState({
//     bookingDateStart: new Date(),
//     bookingDateEnd: new Date(),
//   });
//   //
//   let valDate = {
//     startDate: new Date(),
//     endDate: new Date(),
//     key: "selection",
//   };

//   return (
//     <InputDate
//       placeholder="Pick Date"
//       value={valDate}
//       setPayload={setDateData}
//     />
//   );
// }

// const setup = () => {
//   const { container } = render(<TestInput />);

//   const wrapper = container.querySelector(`.input-date`);
//   const input = container.querySelector(`input.form-control`);

//   return { container, wrapper, input };
// };

// test("Should have wrapper with className .form-control", () => {
//   const { wrapper } = setup();

//   expect(wrapper).toBeInTheDocument();
// });

// test("Should have tag <input> and has className .form-control", () => {
//   const { input } = setup();

//   expect(input).toBeInTheDocument();
// });

// test("Should show date picker when click input field", () => {
//   const { container, input } = setup();

//   //   screen.debug();
//   fireEvent.click(input!);
//   // fireEvent.click(input!);
//   const datePickerWrapper = container.querySelector(`.date-range-wrapper`);
//   //   screen.debug();

//   expect(datePickerWrapper).toBeInTheDocument();
// });
