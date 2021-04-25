import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Page from "../../components/Page";
import { getMemeTokenList } from "../../redux/actions/hub";
import Album from "./Album";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const DashboardView = (props) => {
  const { memesTokenList, getMemeTokenList } = props;
  const classes = useStyles();

  if (!memesTokenList) {
    setInterval(getMemeTokenList, 3000);
  }

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
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
      </Container>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  memesTokenList: state.app.memesTokenList,
});

const mapDispatchToProps = (dispatch) => ({
  getMemeTokenList: () => dispatch(getMemeTokenList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
