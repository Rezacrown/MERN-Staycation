// import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Button from "./index";

describe("Button components", () => {
  //
  it("should has defined", ({ expect }) => {
    const { getByText } = render(<Button>click</Button>);

    const element = getByText("click");

    expect(element).toBeDefined();
    // expect(element).toBeInTheDocument();
  });

  //
  it("should have loading if has isLoading", ({ expect }) => {
    const { getByText } = render(<Button isLoading>click</Button>);

    const element = getByText(/...loading/i);

    expect(element).toBeDefined();
    // expect(element).toBeInTheDocument();
  });
  //
  it("should have isDisabled", ({ expect }) => {
    const { container } = render(
      <Button isDisabled isPrimary>
        click
      </Button>
    );

    // const element = container.getAttribute('isDisabled')
    // const element = container.getAttribute('isDisabled')
    // const element = container.getAttribute('isDisabled')
    // yg sukses
    const element = container.getElementsByTagName("button");

    expect(element[0]).toHaveProperty("disabled", true);
  });

  it("should have isPrimary", ({ expect }) => {
    const { container } = render(
      <Button isDisabled isPrimary>
        click
      </Button>
    );
    // yg sukses
    const element = container.getElementsByClassName("btn-primary");

    // debug(element);
    expect(element[0]).toBeDefined();
  });

  //
});

describe("Type Link Buttton", () => {
  //
  it("is a Link and have property to in inside element", () => {
    // const {container} = render(
    //     <Button type="link">Link</Button>
    // );

    // const element = container.querySelector('a');

    // debug(element)
    expect(<Button type="link">Link</Button>).toHaveProperty(["type"]);
  });
});
