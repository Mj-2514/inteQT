import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../style/notfound.css";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Route not found →", location.pathname);
  }, [location.pathname]);

  return (
    <section className="page_404">
      <div className="container">
        <div className="four_zero_four_bg">
          <h1 className="text-center">404</h1>
        </div>

        <div className="content_box_404">
          <h3>Stay Tuned!</h3>

          <p>
            We are updating this section. We cover 190+ countries — if you see
            this message it simply means this specific page is under
            construction. You can request a quote through our contact page.
          </p>

          <a href="/" className="link_404">
            Go to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
