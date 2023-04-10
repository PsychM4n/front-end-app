
import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return <div class="loader" style={{ background: "#84c1cd", opacity: "0.7" }}><PropagateLoader color={"#ffffff"} css={override} size={20} /></div>;
};

export default Loader;
