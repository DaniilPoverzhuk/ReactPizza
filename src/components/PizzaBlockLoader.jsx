import React from "react";
import ContentLoader from "react-content-loader";

function PizzaBlockLoader() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={490}
      viewBox="0 0 280 490"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="136" cy="145" r="130" />
      <rect x="86" y="286" rx="0" ry="0" width="102" height="19" />
      <rect x="0" y="321" rx="0" ry="0" width="280" height="68" />
      <rect x="0" y="410" rx="0" ry="0" width="85" height="35" />
      <rect x="191" y="410" rx="0" ry="0" width="85" height="35" />
    </ContentLoader>
  );
}

export default PizzaBlockLoader;
