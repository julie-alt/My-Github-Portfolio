import { useEffect } from "react";

function Error404(){
  useEffect(() => {
    throw new Error('Page not found');
  }, []);

  return (
    <div>
      <h1>Error 404 - Page Not Found</h1>
      <p>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}

export default Error404;