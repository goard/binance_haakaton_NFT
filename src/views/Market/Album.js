import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIconBorder from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Album = (props) => {
  const { dataArr } = props;
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {dataArr.map((meme, index) => (
          <Grid item key={index} xs={6} sm={4} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={`https://hub.textile.io${meme.path}`}
                title={meme.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h3" component="h2">
                  {meme.name}
                </Typography>
                <Typography variant="subtitle2" style={{ color: "#e6b000" }}>
                  {meme.price} BNB
                </Typography>
                <Typography variant="subtitle1" style={{ fontSize: "10px" }}>
                  {meme.owner}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid container direction="row" justify="space-between">
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <IconButton>
                    <FavoriteIconBorder />
                  </IconButton>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Album;
