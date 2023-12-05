import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="h-full w-full flex-col flex items-center justify-center text-center gap-3">
      <h1 className="text-primary font-bold text-3xl ">
        Oh oh! Page not found.
      </h1>
      <p className="font-light">
        We're sorry, but the page you are looking for doesn't exist. You can
        search your topic using the box below or return to the homepage.
      </p>
      <Link className="text-primary font-semibold" href="/">
        Back to Homepage
      </Link>
    </section>
  );
};

export default NotFound;
