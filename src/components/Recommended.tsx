const Recommended = () => {
  return (
    <div className="flex flex-col gap-2 lg:h-44 md:h-32 overflow-x-scroll example text-[#959595]">
      <h2>Recommended for You</h2>
      <p>
        {`Based on your recent activity and preferences, we think you'll love`}
        these suggestions:
      </p>
      <ul className="list-disc pl-5 space-y-3">
        <li>
          <h3>Modern E-Commerce Solutions</h3>
          <p>
            Explore our cutting-edge tools and integrations designed to enhance
            your online shopping experience.
          </p>
        </li>
        <li>
          <h3>Interactive Dashboards</h3>
          <p>
            Visualize your data with our latest interactive charts and graphs
            that provide insightful analytics.
          </p>
        </li>
        <li>
          <h3>Next.js Innovations</h3>
          <p>
            Stay ahead with the newest features and best practices in Next.js
            development.
          </p>
        </li>
        <li>
          <h3>Full Stack Development Resources</h3>
          <p>
            Master both frontend and backend technologies with our curated
            learning paths and hands-on tutorials.
          </p>
        </li>
        <li>
          <h3>Creative UI/UX Design</h3>
          <p>
            Discover design trends and UI/UX strategies that will make your
            projects stand out.
          </p>
        </li>
      </ul>
      <p>Dive into these resources and elevate your skills and projects!</p>
    </div>
  );
};

export default Recommended;
