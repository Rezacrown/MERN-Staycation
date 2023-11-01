import { Link } from "react-router-dom";

import "./index.scss";

interface BreadcrumbProps {
  data: itemBreadCrumb[];
  className?: string;
}

type itemBreadCrumb = {
  pageTitle: string;
  pageHref: string;
};

export default function Breadcrumb({ className, data }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb">
      <ol className={["breadcrumb", className].join(" ")}>
        {data.map((item, index) => {
          return (
            <li
              key={`breadcrumb-${index}`}
              className={`breadcrumb-item${
                index === data.length - 1 ? " active" : ""
              }`}
            >
              {index === data.length - 1 ? (
                item.pageTitle
              ) : (
                <Link className="text-decoration-none" to={item.pageHref}>
                  {item.pageTitle}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
