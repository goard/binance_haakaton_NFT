import { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "./TopBar";
import SimpleBackdrop from "./Backdrop";
import { loginAndCreateBucket } from "../../redux/actions/hub";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

const MainLayout = (props) => {
  const { title, loginAndCreateBucket, children } = props;
  const classes = useStyles();
  const [openBackDrop, setOpenBackDrop] = useState(false);

  const loadWeb3 = async (loginAndCreateBucket) => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      loginAndCreateBucket();
    } else {
      window.alert(
        "Metamask not detected! Install Metamask plugin to proceed: https://metamask.io/download.html"
      );
    }
  };

  return (
    <div className={classes.root}>
      <TopBar
        loadWeb3={loadWeb3}
        loginAndCreateBucket={loginAndCreateBucket}
        setOpenBackDrop={setOpenBackDrop}
      />
      <SimpleBackdrop open={openBackDrop} title={title} />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bucket: state.app.bucket,
  title: state.app.title,
});

const mapDispatchToProps = (dispatch) => ({
  loginAndCreateBucket: () => dispatch(loginAndCreateBucket()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
