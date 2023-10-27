import React from "react";
import "./index.scss";

interface RatingProps {
  rating: number;
  maxRating: number;
  height: number;
  width: number;
  spacing: number;
  className?: string;
}

const Rating: React.FC<RatingProps> = ({
  rating,
  maxRating,
  height,
  width,
  className,
  spacing,
}) => {
  const stars = [];
  // const fullStars = Math.floor(rating);
  // const fullStars = 5;
  // const decimalPart = 5 - rating;
  const decimalPart = rating % 1;
  let leftPos = 0;

  // Menambahkan bintang penuh
  for (let i = 0; i < 5 && i < rating - decimalPart; i++) {
    leftPos = leftPos + width;

    stars.push(
      <svg
        key={i}
        height={height}
        width={width}
        fill="gold"
        xmlns="http://www.w3.org/2000/svg"
        className="star"
        style={{
          left: i * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      >
        <path d="M14.0489 1.67705C14.3483 0.755738 15.6517 0.75574 15.9511 1.67705L18.6484 9.97847C18.7822 10.3905 19.1662 10.6695 19.5994 10.6695H28.328C29.2968 10.6695 29.6995 11.9091 28.9158 12.4785L21.8542 17.609C21.5037 17.8637 21.3571 18.315 21.4909 18.7271L24.1882 27.0285C24.4876 27.9498 23.4331 28.7159 22.6494 28.1465L15.5878 23.016C15.2373 22.7613 14.7627 22.7613 14.4122 23.016L7.3506 28.1465C6.56689 28.7159 5.51241 27.9498 5.81176 27.0285L8.50906 18.7271C8.64293 18.315 8.49627 17.8637 8.14579 17.609L1.08417 12.4785C0.300457 11.9091 0.703234 10.6695 1.67196 10.6695H10.4006C10.8338 10.6695 11.2178 10.3905 11.3516 9.97847L14.0489 1.67705Z" />
      </svg>
    );
  }

  // Menambahkan bintang parsial (berwarna kuning)
  if (decimalPart > 0 && rating <= maxRating) {
    const percentage = decimalPart * 1000; // dibuat seribu karena ada masalah, contoh rating 3.5 tidak akan menjadi 3 setengah karena masalah persentase
    const clipId = `clip-${Math.random().toString(36).substr(2, 5)}`;

    stars.push(
      <svg
        key="partial-star"
        height={height}
        width={width}
        className="star"
        fill="gold"
        style={{
          left: leftPos,
          height: height,
          width: decimalPart * width - spacing,
        }}
      >
        <defs>
          <clipPath id={clipId}>
            <rect width={`${percentage}%`} height="100%" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <path d="M14.0489 1.67705C14.3483 0.755738 15.6517 0.75574 15.9511 1.67705L18.6484 9.97847C18.7822 10.3905 19.1662 10.6695 19.5994 10.6695H28.328C29.2968 10.6695 29.6995 11.9091 28.9158 12.4785L21.8542 17.609C21.5037 17.8637 21.3571 18.315 21.4909 18.7271L24.1882 27.0285C24.4876 27.9498 23.4331 28.7159 22.6494 28.1465L15.5878 23.016C15.2373 22.7613 14.7627 22.7613 14.4122 23.016L7.3506 28.1465C6.56689 28.7159 5.51241 27.9498 5.81176 27.0285L8.50906 18.7271C8.64293 18.315 8.49627 17.8637 8.14579 17.609L1.08417 12.4785C0.300457 11.9091 0.703234 10.6695 1.67196 10.6695H10.4006C10.8338 10.6695 11.2178 10.3905 11.3516 9.97847L14.0489 1.67705Z" />
        </g>
      </svg>
    );
  }

  // make placeholder stars (silver stars)
  const starPlaceholder = [];
  for (let i = 0; i < maxRating; i++) {
    starPlaceholder.push(
      <svg
        key={i}
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        className="star"
        fill="silver"
        style={{
          marginRight: spacing,
          left: i * width,
          height: height,
          width: width,
        }}
      >
        <path d="M14.0489 1.67705C14.3483 0.755738 15.6517 0.75574 15.9511 1.67705L18.6484 9.97847C18.7822 10.3905 19.1662 10.6695 19.5994 10.6695H28.328C29.2968 10.6695 29.6995 11.9091 28.9158 12.4785L21.8542 17.609C21.5037 17.8637 21.3571 18.315 21.4909 18.7271L24.1882 27.0285C24.4876 27.9498 23.4331 28.7159 22.6494 28.1465L15.5878 23.016C15.2373 22.7613 14.7627 22.7613 14.4122 23.016L7.3506 28.1465C6.56689 28.7159 5.51241 27.9498 5.81176 27.0285L8.50906 18.7271C8.64293 18.315 8.49627 17.8637 8.14579 17.609L1.08417 12.4785C0.300457 11.9091 0.703234 10.6695 1.67196 10.6695H10.4006C10.8338 10.6695 11.2178 10.3905 11.3516 9.97847L14.0489 1.67705Z" />
      </svg>
    );
  }

  // Menghapus bintang jika lebih dari maxRating
  stars.splice(maxRating);

  return (
    <div className={["stars", className].join(" ")} style={{ height: height }}>
      {starPlaceholder}
      {stars}
    </div>
  );
};

export default Rating;
