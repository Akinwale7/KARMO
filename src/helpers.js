import React, { useState, useMemo } from "react";
export const useIcon = icon =>
  useMemo(() => {
    if (icon === undefined) return null;
    const isRenderable = ["string", "number", "boolean"].includes(typeof icon);

    return isRenderable || React.isValidElement(icon)
      ? icon
      : React.createElement(icon);
  });

export const useId = () => useState(() => ++id)[0];
