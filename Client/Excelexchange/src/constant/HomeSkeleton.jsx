import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function HomeSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      <h1 className="mt-4">Please wait...</h1>
    </div>
  );
}
