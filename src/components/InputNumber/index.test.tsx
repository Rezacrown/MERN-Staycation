// import "@testing-library/jest-dom";
// import { expect } from "vitest";
// import { render, fireEvent } from "@testing-library/react";
// import InputNumber from "./index";
// import { useState } from "react";

// // definie test component for reusable test
// export function TestInput() {
//   const [numberData, setNumberData] = useState(1);

//   return (
//     <InputNumber
//       value={numberData}
//       max={3}
//       min={1}
//       prefix=""
//       suffix={` Night`}
//       placeholder="select Duration"
//       handleChangeValue={setNumberData}
//     />
//   );
// }

// // get elements want to test expected
// const setup = () => {
//   const { container } = render(<TestInput />);
//   const input = container.querySelector(`input.form-control`);

//   const plus = container.querySelector("span.plus");
//   const minus = container.querySelector("span.minus");

//   return { input, plus, minus };
// };

// // Test
// test("Should able to change value with plus button", () => {
//   const { input, minus, plus } = setup();

//   // plus
//   fireEvent.click(plus!);
//   expect(input).toHaveValue("2 Nights");

//   // minus
//   fireEvent.click(minus!);
//   expect(input).toHaveValue("1 Night");
// });

// test("Should cant be change value = [value > max, value < min ]", () => {
//   const { input, minus, plus } = setup();

//   // max 3
//   fireEvent.click(plus!);
//   fireEvent.click(plus!);
//   expect(input).toHaveValue("3 Nights");

//   // min 1
//   fireEvent.click(minus!);
//   fireEvent.click(minus!);
//   expect(input).toHaveValue("1 Night");
// });
