import React from "react";

const Card = ({ href, children }) => {
  let cardClasses =
    "block max-w-md p-4 rounded-md bg-gray-300 hover:scale-105 duration-500";

  if (href)
    return (
      <a href={href} className={cardClasses}>
        {children}
      </a>
    );

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
