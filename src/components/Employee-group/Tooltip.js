import React from "react";
import { Tooltip, Button } from "antd";
import toolStyle from "./toolStyle.css";

function ToolTipTool({ tooltipText }) {
  return (
    <Tooltip title={tooltipText} placement="right">
      <Button className="custom-button"> ❔</Button>
    </Tooltip>
  );
}

export default ToolTipTool;
