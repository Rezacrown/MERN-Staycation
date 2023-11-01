// import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Breadcrumb from "./index";
import { BrowserRouter } from "react-router-dom";

const setup = () => {
  // state list
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "House Details", pageHref: "/detail" },
  ];

  //
  const { container } = render(
    <BrowserRouter>
      <Breadcrumb data={breadcrumbList} />
    </BrowserRouter>
  );
  const breadcrumb = container.querySelector(`nav .breadcrumb`);

  return {
    breadcrumb,
  };
};

test("Should have <ol> with className .breadcrumb and have text Home & House Details", () => {
  const { breadcrumb } = setup();

  screen.debug(breadcrumb!);

  expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveTextContent("Home");
    expect(breadcrumb).toHaveTextContent("House Details");
});
