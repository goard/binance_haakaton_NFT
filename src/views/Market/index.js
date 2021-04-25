import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { getMemeTokenList } from "../../redux/actions/hub";
import Page from "../../components/Page";
import Album from "./Album";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const MarketView = (props) => {
  const { memesTokenList, getMemeTokenList } = props;
  const classes = useStyles();

  if (!memesTokenList) {
    setInterval(getMemeTokenList, 3000);
  }

  return (
    <Page className={classes.root} title="Market">
      {memesTokenList ? (
        memesTokenList.length > 0 ? (
          <Album dataArr={memesTokenList} />
        ) : (
          <h6>
            No Memes in the Market! Try{" "}
            <Link component={RouterLink} to="/create">
              adding a meme!
            </Link>
          </h6>
        )
      ) : (
        <p>Loading...</p>
      )}
    </Page>
  );
};

const mapStateToProps = (state) => ({
  bucket: state.app.bucket,
  totalMemes: state.app.totalMemes,
  memesTokenList: state.app.memesTokenList,
});

const mapDispatchToProps = (dispatch) => ({
  getMemeTokenList: () => dispatch(getMemeTokenList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MarketView);
