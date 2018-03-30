import React from "react";

export function withProps(children, props) {
  return React.Children.map(children, child => {
    return React.cloneElement(child, { ...props });
  });
}
