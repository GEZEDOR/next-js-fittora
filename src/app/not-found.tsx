import { FC } from "react";
import Link from "next/link";

const NotFound: FC = () => {
  return (
    <div className="mt-[300px] flex flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-800">404</h1>
      <p className="mb-6 text-xl text-gray-600">
        Oops! The page you are looking for could not be found.
      </p>
      <Link href="/" className="text-lg text-violet-600 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
