import { Link } from "react-router-dom";

export const Button = ({ text, to, className }) => {

  return (
    <Link className={className} to={to}>
      {text}
    </Link>
  );
};