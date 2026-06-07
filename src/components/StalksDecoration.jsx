import stalk1 from "../assets/icons/stalk_1.svg";
import stalk2 from "../assets/icons/stalk_2.svg";
import stalk3 from "../assets/icons/stalk_3.svg";

function StalksDecoration() {
  return (
    <div className="stalks-wrapper" aria-hidden="true">
      <div className="stalks-left">
        <img src={stalk1} className="stalk stalk-1" alt="" />
        <img src={stalk2} className="stalk stalk-2" alt="" />
      </div>
      <div className="stalks-right">
        <img src={stalk3} className="stalk stalk-3" alt="" />
      </div>
    </div>
  );
}

export default StalksDecoration;
