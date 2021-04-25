import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
  },
  cardMedia: {
    paddingTop: "100%", // 16:9
    flexGrow: 1,
  },
}));

const MediaNft = (props) => {
  const { img, titleImg } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={`https://hub.textile.io${img}`}
        title={titleImg}
      />
    </Card>
  );
};
export default MediaNft;
