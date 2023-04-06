import { ROUTES } from "../../constants";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-extrabold text-gray-900">
        Grow Your Investments with Our Stock Price Analyzer
      </h1>
      <Link
        className="bg-blue-700 rounded py-4 text-xl text-center w-3/12 text-white transition-colors hover:bg-blue-800"
        to={ROUTES.CHART}
      >
        Explore
      </Link>
    </div>
  );
}
