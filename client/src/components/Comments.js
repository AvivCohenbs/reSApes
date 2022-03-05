import "./Comments.css";
import React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function Comments({ comment }) {
  return (
    <div className="list-comments">
      <ListItem
        sx={{
          width: "428px",
          bgcolor: "#fefbf3",
          border: 2,
          borderRadius: 2,
          borderColor: "primary.main",
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={comment.user.email}
          secondary={
            <React.Fragment>
              <Typography>{comment.content}</Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
}
export default Comments;
