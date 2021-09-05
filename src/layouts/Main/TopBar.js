import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputIcon from "@material-ui/icons/Input";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Logo from "../../assets/logo";

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    height: 64,
  },
  logo: {
    background: `linear-gradient(to right, ${theme.palette.blue.main}, ${theme.palette.indigo.main})`,
    padding: "8px",
    borderRadius: "4px",
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing(3),
  },
  logoName: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

const TopBar = (props) => {
  const {
    loadWeb3,
    loginAndCreateBucket,
    setOpenBackDrop,
    className,
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Link
          className={classes.logo}
          component={RouterLink}
          to="/app/dashboard"
        >
          <Logo
            width="26"
            height="23"
            viewBox="0 0 26 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          />
        </Link>
        <Typography className={classes.logoName}>NFT Market</Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Поиск…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Box flexGrow={1} />
        <Tooltip title="Connect wallet">
          <IconButton
            color="inherit"
            onClick={() => {
              loadWeb3(loginAndCreateBucket);
              setOpenBackDrop(true);
            }}
          >
            <InputIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
