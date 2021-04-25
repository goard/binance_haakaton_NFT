import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Page from "../../components/Page";
import MediaNft from "./MediaNft";
import InfoNft from "./InfoNft";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const TokenNftView = (props) => {
  const { memesTokenList } = props;
  const classes = useStyles();
  const linkId = useParams().id;

  return (
    <Page className={classes.root} title="Token">
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} xs={12}>
            <MediaNft
              img={memesTokenList[linkId].path}
              title={memesTokenList[linkId].name}
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <InfoNft nft={memesTokenList[linkId]} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  memesTokenList: state.app.memesTokenList,
});

export default connect(mapStateToProps)(TokenNftView);
