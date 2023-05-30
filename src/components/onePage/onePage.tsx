"use client";
import Link from "next/link";
import "./page.css";
import "./media.css";
import React, { FC, useState } from "react";

interface onePage {
  data: IItems;
}

const OnePage: FC<onePage> = ({ data }) => {
  const [isCof, setIsCof] = useState(false);
  return (
    <div className="cofCont">
      <div
        className={isCof ? "cofDiv hover" : "cofDiv"}
        onMouseEnter={() => setIsCof(true)}
        onMouseLeave={() => setIsCof(false)}
      >
        {isCof ? (
          <Link className="retLink" href={"./"}>
            Return
          </Link>
        ) : (
          <>
            <div className="cofTitle">
              Вас приветсвует страница с кофe {data.name}
            </div>
            <p className="cofDesc">{data.description}</p>
          </>
        )}
      </div>
    </div>
  );
};
export default OnePage;
