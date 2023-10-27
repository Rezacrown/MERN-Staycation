import "@testing-library/jest-dom";
import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import Stars from "./index";

it("should have property [rating, maxRating, height, width, spacing]", () => {
  const height = 40,
    width = 40,
    spacing = 4,
    maxRating = 5;

  const { container } = render(
    <Stars
      rating={3.5}
      height={height}
      width={width}
      spacing={spacing}
      maxRating={maxRating}
    />
  );


  // stars container check
  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.querySelector("div.stars")).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );

  // star yellow check
  const starsYellow = "div.stars svg.star:not(.placeholder)";
  expect(container.querySelector(starsYellow)).toBeInTheDocument();
  // attribute check
  expect(container.querySelector(starsYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`width: ${width}px`)
  );
  expect(container.querySelector(starsYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );
  expect(container.querySelector(starsYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`margin-right: ${spacing}px`)
  );
});
