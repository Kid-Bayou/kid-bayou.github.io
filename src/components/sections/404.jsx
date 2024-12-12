import Image from "../../assets/images/404.png";

function FourOFour() {
  return (
    <>
      <div className="FourOFour-container">
        <img src={Image} className="image-404" />
        <h1>Page Not Found</h1>
      </div>
    </>
  );
}

export default FourOFour;
