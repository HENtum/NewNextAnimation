import Link from "next/link";
import "./page.css";
import "./media.css";
import { FC } from "react";

interface rootPage {
  items: IItems[];
}

export const RootPage: FC<rootPage> = ({ items }) => {
  return (
    <div className="container">
      <div className="divLinks">
        {items &&
          items.map((obj: any) => {
            return (
              <Link
                className="link1"
                href={`/test/${obj?.slug}`}
                key={obj.slug}
              >
                {obj.name}
              </Link>
            );
          })}
      </div>
    </div>
  );
};
