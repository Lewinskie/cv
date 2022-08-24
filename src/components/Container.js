export const Container = ({ children, ...rest }) => {
  return (
    <div style={{ position: "relative", height: "90vh" }} {...rest}>
      {children}
    </div>
  );
};
