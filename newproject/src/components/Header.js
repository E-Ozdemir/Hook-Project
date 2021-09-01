import React, {memo} from "react";
import cw from "../assets/cw_logo.png";

// Her defasinda yeniden render olmasin diye useMemo yapisi kullaniliyor
//------------------1--------------
// const Header = React.memo ( ({img}) => {
//   console.log("Rendering: Header Comp!");
//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="CW_logo"
//         style={{ margin: "1rem", maxHeight: "200px" }}
//       />
//     </div>
//   );
// });
// export default Header;

//------2-------------

// const Header = ({img}) => {
//   console.log("Rendering: Header Comp!");
//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="CW_logo"
//         style={{ margin: "1rem", maxHeight: "200px" }}
//       />
//     </div>
//   );
// };
// export default React.memo(Header);

//----------3---------------
const Header = ({img}) => {
  console.log("Rendering: Header Comp!");
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="CW_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
};
export default memo(Header);