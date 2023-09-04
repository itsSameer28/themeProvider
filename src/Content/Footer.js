import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "inherit",
    padding: theme.spacing(6),
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer} >
      <Typography variant="h6" align="center" gutterBottom color="secondary">
        Contact Us
      </Typography>
      <Typography variant="subtitle1" align="center" color="secondary">
        Something here to give the footer a purpose!
      </Typography>
      <Typography variant="body2" align="center" color="secondary">
        {"© "}
        <Link  href="#" color="secondary">
          CopyRight
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </footer>
  );
}
export default Footer;
