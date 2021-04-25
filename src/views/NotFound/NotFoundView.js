import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Page from "../../components/Page";
import NotFoundIcon from "../../icons/NotFound";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  image: {
    marginTop: 50,
    display: "inline-block",
    maxWidth: "100%",
    width: "auto",
    height: "auto",
  },
}));

const NotFoundView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="404">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Typography align="center" color="textPrimary" variant="h1">
            404: Нет такой страницы
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            Вы сюда попали по ошибке. Попробуйте использовать навигацию.
          </Typography>
          <Box textAlign="center">
            <NotFoundIcon className={classes.image} />
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default NotFoundView;
