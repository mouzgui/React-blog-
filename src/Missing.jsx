import React from "react";
import { Link } from "react-router-dom";
const Missing = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-24">
      <h1 className="text-6xl font-semibold text-red-600">404 not Found</h1>
      <Link
        to={"/"}
        className="underline text-4xl font-semibold text-slate-700"
      >
        Click to go Home Page
      </Link>
    </div>
  );
};

export default Missing;
