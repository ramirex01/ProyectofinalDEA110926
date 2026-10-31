import { sources, apaYears } from "../data/content.js";

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
  const author = source.id === "F4" ? "Román" : source.author;
  return (
    <a
      className="citation"
      href={direct ? source.url : `./referencias.html#ref-${id}`}
      {...(direct ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      ({author}, {apaYears[id]})
    </a>
  );
}

export function CitationGroup({ ids }) {
  return (
    <span>
      (
      {[...ids]
        .sort((a, b) => {
          const first = sources.find((item) => item.id === a);
          const second = sources.find((item) => item.id === b);
          return (
            first.author.localeCompare(second.author, "es") ||
            apaYears[a].localeCompare(apaYears[b], "es")
          );
        })
        .map((id, index) => {
          const source = sources.find((item) => item.id === id);
          const author = id === "F4" ? "Román" : source.author;
          return (
            <span key={id}>
              {index > 0 && "; "}
              <a className="citation" href={`./referencias.html#ref-${id}`}>
                {author}, {apaYears[id]}
              </a>
            </span>
          );
        })}
      )
    </span>
  );
}
