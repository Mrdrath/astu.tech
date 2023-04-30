import React from "react";

const variantClasses = {
  h1: "font-bold md:text-3xl sm:text-[28px] text-[32px]",
  h2: "text-xl",
  h3: "font-normal text-base",
  h4: "font-normal text-sm",
  h5: "font-normal text-xs",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
