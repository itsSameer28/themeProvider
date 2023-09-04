import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
const styles = {
  drawer: {
    width: 250,
  },
};
const listItems = [ "Login","Home Page", "Product Gallery" ," About Us","FeedBack" ];
function SideBar({ open, setOpen }) {
  const navigate = useNavigate();

  const handleNavigationChange = (value) => {
    switch (value) {
      case "Login":
        navigate("/login");
        break;
      case "Home Page":
        navigate("/home");
        break;
      case " About Us":
        navigate("/nextPage");
        break;
      case "Product Gallery":
          navigate("/imgPage");
          break;
      case "FeedBack":
        navigate("/modal");
        break;
      default:
        navigate("/");
    }
    setOpen(false);
  };

  return (
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <div style={styles.drawer}>
        <List>
          {listItems.map((value) => {
            return (
              <ListItem button onClick={() => handleNavigationChange(value)}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </ListItemIcon>
                <ListItemText primary={value} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
}
export default SideBar;