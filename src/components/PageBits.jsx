import { ArrowUpRight } from "lucide-react";
import { sources } from "../data/content.js";

export function PageIntro({ number, eyebrow, title, children }) {
  return (
    <div className="page-intro container">
      <span className="eyebrow">
        {number} / {eyebrow}
      </span>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}

export function Citation({ id, direct = false }) {
  const source = sources.find((item) => item.id === id);
  return (
    <a
      className="citation"
      href={direct ? source.url : `./referencias.html#ref-${id}`}
      {...(direct ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      [{id}]<ArrowUpRight size={13} aria-hidden="true" />
    </a>
  );
}
