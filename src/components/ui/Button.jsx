import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  className = "",
  ...props
}) => {
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
    outline: "bg-white border border-gray-300 hover:bg-gray-50 text-gray-800",
  };

  const sizeClasses = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2 px-4 text-sm",
    lg: "py-2.5 px-5 text-base",
  };

  const iconSize = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="mr-2">
          {React.cloneElement(icon, { size: iconSize[size] })}
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-2">
          {React.cloneElement(icon, { size: iconSize[size] })}
        </span>
      )}
    </button>
  );
};

export default Button;
