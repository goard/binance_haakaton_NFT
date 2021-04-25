import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import {
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  User as UserIcon,
  Users as UsersIcon,
} from "react-feather";
import NavItem from "./NavItem";

const user = {
  avatar: "/smile.jpeg",
  jobTitle: "freelancer",
  name: "Mounty Goard",
};

const items = [
  {
    href: "/app/dashboard",
    icon: BarChartIcon,
    title: "Панель",
  },
  {
    href: "/app/mycollection",
    icon: UsersIcon,
    title: "Моя коллекция",
  },
  {
    href: "/app/create",
    icon: UsersIcon,
    title: "Создать NFT",
  },
  {
    href: "/app/account",
    icon: UserIcon,
    title: "Профиль",
  },
  {
    href: "/app/settings",
    icon: SettingsIcon,
    title: "Настройки",
  },
];

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
  },
  desctopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/app/account"
        />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
      <Box p={2} m={2} bgcolor="background.dark">
        <Typography align="center" gutterBottom variant="h4">
          Need more?
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desctopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;
