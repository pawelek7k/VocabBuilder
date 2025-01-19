import { FaArrowRightLong } from "react-icons/fa6";
import { LinkComponent as Link } from "../Link";

export const TrainLink = () => {
  return (
    <Link to="/training" className="flex items-center gap-2">
      Train oneself <FaArrowRightLong />
    </Link>
  );
};
