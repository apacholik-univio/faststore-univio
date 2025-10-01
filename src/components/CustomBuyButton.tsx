import React from "react";
import { Button as UIButton } from "@faststore/ui";


export function CustomBuyButton({ ...props }) {


  return (
    <UIButton
      {...props}
      variant="primary"
      onClick={(e) => {
        alert("Hello User!");
        props?.onClick(e);
      }}
    >
      New Buy Button
    </UIButton>
  );
}