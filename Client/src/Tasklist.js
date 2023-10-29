import React from "react";
import { Box, Typography } from "@mui/material";
const TaskList = (props) => {
  return (
    <>
      <Box
        style={{
          float: "left",
          margin: "10px",
          width: "fit-content",
          padding: "10px",
          // boxShadow:
          //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
          backgroundColor: "#010407",
          border: "solid wheat 1px",
          color: "white",
          borderRadius: "5px",
        }}
      >
        <Typography variant="h5" style={{ width: "max-content" }}>
          Block No. {props.id}
        </Typography>
        <Typography variant="subtitle2">Data : {props.data} </Typography>
        <Typography variant="subtitle2">
          Timestamp : {props.timestamp}
        </Typography>
        <Typography className="text-ellipsis overflow-hidden w-fit">
          prevHash : {props.prevHash}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          className="text-ellipsis overflow-hidden"
        >
          hash : {props.hash}
        </Typography>
        <Typography variant="subtitle2">nonce : {props.nonce}</Typography>
        <Typography variant="subtitle2">
          difficulty : {props.difficulty}
        </Typography>
      </Box>
    </>
  );
};

export default TaskList;
