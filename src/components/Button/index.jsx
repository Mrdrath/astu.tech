import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder14: "rounded-[14px]",
  RoundedBorder8: "rounded-lg",
};
const variants = {
  icbFillBluegray10019: "bg-blue_gray_100_19",
  OutlineBluegray200:
    "bg-white_A700 border border-blue_gray_200 border-solid text-gray_600",
  FillBlue800: "bg-blue_800 text-white_A700",
  OutlineBlue800:
    "bg-white_A700 border border-blue_800 border-solid text-blue_800",
};
const sizes = { smIcn: "p-1", sm: "p-[11px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["icbCircleBorder14", "RoundedBorder8"]),
  variant: PropTypes.oneOf([
    "icbFillBluegray10019",
    "OutlineBluegray200",
    "FillBlue800",
    "OutlineBlue800",
  ]),
  size: PropTypes.oneOf(["smIcn", "sm"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
