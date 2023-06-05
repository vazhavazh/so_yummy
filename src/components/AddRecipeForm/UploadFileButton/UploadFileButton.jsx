export const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <button type="button" onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
};

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};
