// import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import Button from "./index";

describe("Button components", () => {
  //
  it("should have loading if has isLoading", ({ expect }) => {
    const { getByText } = render(<Button>click</Button>);

    const element = getByText('click');

    expect(element).toBeDefined();
    // expect(element).toBeInTheDocument();
  });
});
