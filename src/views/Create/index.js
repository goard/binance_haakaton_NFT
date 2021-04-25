import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Page from "../../components/Page";
import { registerMeme } from "../../redux/actions/hub";
import CreateNft from "./CreateNft";
import SimpleBackdrop from "./Backdrop";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CreateView = (props) => {
  const { backdrop, title, registerMeme } = props;
  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (title === "Create Meme") setOpenSnackbar(true);
  }, [title]);

  return (
    <Page className={classes.root} title="Create">
      <Container maxWidth={false}>
        <CreateNft registerMeme={registerMeme} />
        <SimpleBackdrop open={backdrop} title={title} />
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            Успех, NFT token создан!
          </Alert>
        </Snackbar>
      </Container>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  bucket: state.app.bucket,
  title: state.app.title,
  backdrop: state.app.backdrop,
});

const mapDispatchToProps = (dispatch) => ({
  registerMeme: (payload) => dispatch(registerMeme(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateView);
