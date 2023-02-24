import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    alert("you must login");
    navigate("/");
  }, []);

  return <div className="mt-[23rem]"></div>;
};

export default Error;
