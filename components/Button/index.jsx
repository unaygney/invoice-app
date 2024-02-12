"use client";
import clsx from "clsx";
import React from "react";
import style from "./style.module.css";
import PlusIcon from "./icons/plus.svg";

export default function Button({
  title,
  variant,
  onClick,
  className,
  ...rest
}) {
  if (variant === "primary") {
    return (
      <button
        onClick={onClick}
        {...rest}
        className={clsx(style.button, style.primary, className)}
      >
        <PlusIcon />
        {title}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      {...rest}
      className={clsx(style.button, style[variant], className)}
    >
      {title}
    </button>
  );
}
