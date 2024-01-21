import { Global, css } from "@emotion/react";

function GlobalStyle() {
  return (
    <Global
      styles={css`
        body {
          font-family: "Noto Serif", "Arial";
          padding: 32px 80px;
        }
      `}
    />
  );
}

export { GlobalStyle };
