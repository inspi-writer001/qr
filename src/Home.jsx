import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

import QRCode from "react-qr-code";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const me = searchParams.get("_wallet_add");
  // console.log(id);
  console.log(me);
  return (
    <div
      style={{
        height: "auto",
        margin: "0 auto",
        maxWidth: 604,
        width: "100%"
      }}
    >
      <QRCode
        size={256}
        style={{ height: "90%", width: "90%" }}
        value={me}
        viewBox={`0 0 256 256`}
      />
      {/* <p>{id}</p> */}
    </div>
  );
}

export default Home;
