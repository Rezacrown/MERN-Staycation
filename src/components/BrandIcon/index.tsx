import Button from "../Button";

export default function Brandicon({ isCenter }: BrandIconProps) {
  return (
    <>
      {isCenter ? (
        <div className="d-flex justify-content-center border-bottom border border-bg-secondary">
          <Button type="link" href="/" className="brand-text-icon">
            Stay<span className="text-gray-900 fw">cation</span>
          </Button>
        </div>
      ) : (
        <Button type="link" href="/" className="brand-text-icon">
          Stay<span className="text-gray-900 fw">cation</span>
        </Button>
      )}
    </>
  );
}

type BrandIconProps = {
  isCenter?: boolean;
};
