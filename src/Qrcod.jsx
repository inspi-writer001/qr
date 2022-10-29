import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
function Qrcod() {
   const {id}= useParams();


  return (
    <div className="App">
  
<div style={{ height: "auto", margin: "0 auto", maxWidth: 604, width: "100%" }}>
    <QRCode
    size={256}
    style={{ height: "90vh",  width: "90vh" }}
    value={id}
    viewBox={`0 0 256 256`}
    />
    {/* <p>{id}</p> */}
</div>
    </div>
  );
}

export default Qrcod;
