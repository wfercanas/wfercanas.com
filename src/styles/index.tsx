import { Global, css } from "@emotion/react";

function GlobalStyle() {
  return (
    <Global
      styles={css`
        body {
          font-family: "Noto Serif", "Arial";
          padding: 32px 80px;
          color: #333;
          line-height: 1.8;
        }
      `}
    />
  );
}

export { GlobalStyle };
