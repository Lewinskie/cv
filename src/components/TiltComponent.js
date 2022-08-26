import Tilt from "react-parallax-tilt";
export const TiltComponent = ({ children, ...rest }) => {
  return <Tilt {...rest}>{children}</Tilt>;
};
