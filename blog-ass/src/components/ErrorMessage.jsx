import React from "react";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

function ErrorMessage() {
  return (
    <div className="alert alert-danger " role="alert">
      <ReportProblemIcon /> No Blog post to display — check it out!
    </div>
  );
}

export default ErrorMessage;
