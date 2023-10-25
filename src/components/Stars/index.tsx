import { ReactNode } from "react";
import "./index.scss";

interface StarsProps {
  value: number;
  height: number;
  spacing: number;
  width: number;
  className?: string;
}

export default function Stars({
  className,
  height,
  value,
  spacing,
  width,
}: StarsProps) {
  const decimals = value % 1;

  const star = [];
  let leftPos = 0;

  // yellow stars
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    star.push(
      <svg
        key={`star-${index}`}
        className="star"
        viewBox="0 0 30 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      >
        <path
          d="M14.0489 1.67705C14.3483 0.755738 15.6517 0.75574 15.9511 1.67705L18.6484 9.97847C18.7822 10.3905 19.1662 10.6695 19.5994 10.6695H28.328C29.2968 10.6695 29.6995 11.9091 28.9158 12.4785L21.8542 17.609C21.5037 17.8637 21.3571 18.315 21.4909 18.7271L24.1882 27.0285C24.4876 27.9498 23.4331 28.7159 22.6494 28.1465L15.5878 23.016C15.2373 22.7613 14.7627 22.7613 14.4122 23.016L7.3506 28.1465C6.56689 28.7159 5.51241 27.9498 5.81176 27.0285L8.50906 18.7271C8.64293 18.315 8.49627 17.8637 8.14579 17.609L1.08417 12.4785C0.300457 11.9091 0.703234 10.6695 1.67196 10.6695H10.4006C10.8338 10.6695 11.2178 10.3905 11.3516 9.97847L14.0489 1.67705Z"
          fill="#FFCC47"
        />
      </svg>
    );
  }

  if (decimals > 0 && value <= 5)
    star.push(
      <svg
        className="star"
        viewBox="0 0 30 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        key={`starWithDecimal`}
        style={{
          left: leftPos,
          height: height,
          width: decimals * width - spacing,
        }}
      >
        <path
          d="M14.0489 1.67705C14.3483 0.755738 15.6517 0.75574 15.9511 1.67705L18.6484 9.97847C18.7822 10.3905 19.1662 10.6695 19.5994 10.6695H28.328C29.2968 10.6695 29.6995 11.9091 28.9158 12.4785L21.8542 17.609C21.5037 17.8637 21.3571 18.315 21.4909 18.7271L24.1882 27.0285C24.4876 27.9498 23.4331 28.7159 22.6494 28.1465L15.5878 23.016C15.2373 22.7613 14.7627 22.7613 14.4122 23.016L7.3506 28.1465C6.56689 28.7159 5.51241 27.9498 5.81176 27.0285L8.50906 18.7271C8.64293 18.315 8.49627 17.8637 8.14579 17.609L1.08417 12.4785C0.300457 11.9091 0.703234 10.6695 1.67196 10.6695H10.4006C10.8338 10.6695 11.2178 10.3905 11.3516 9.97847L14.0489 1.67705Z"
          fill="#FFCC47"
        />
      </svg>
    );

  // silver stars
  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="star placeholder"
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      >
        <path
          d="M22.0979 6.8541C22.6966 5.01148 25.3034 5.01148 25.9021 6.8541L28.7148 15.5106C28.9825 16.3347 29.7505 16.8926 30.6169 16.8926H39.7189C41.6564 16.8926 42.4619 19.3718 40.8945 20.5106L33.5308 25.8607C32.8298 26.37 32.5365 27.2727 32.8043 28.0967L35.6169 36.7533C36.2157 38.5959 34.1067 40.1282 32.5393 38.9894L25.1756 33.6393C24.4746 33.13 23.5254 33.13 22.8244 33.6393L15.4607 38.9894C13.8933 40.1282 11.7843 38.5959 12.3831 36.7533L15.1957 28.0967C15.4635 27.2727 15.1702 26.37 14.4692 25.8607L7.1055 20.5106C5.53807 19.3718 6.34362 16.8926 8.28107 16.8926H17.3831C18.2495 16.8926 19.0175 16.3347 19.2852 15.5106L22.0979 6.8541Z"
          fill="#e9ecef"
        />
      </svg>
    );
  }

  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {star.map((e: ReactNode) => (
          <>{e}</>
        ))}
        {starPlaceholder.map((e: ReactNode) => (
          <>{e}</>
        ))}
      </div>
    </>
  );
}
