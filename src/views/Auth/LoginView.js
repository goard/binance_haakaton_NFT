import { Link as RouterLink, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
// import FacebookIcon from "../../icons/Facebook";
// import GoogleIcon from "../../icons/Google";
import Page from "../../components/Page";
// import { useHttp } from "../../hooks/http.hook";
// import Toast from "../components/Toast";
// import { AuthContext } from "../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const LoginView = () => {
  const classes = useStyles();
  const history = useHistory();
  // const { request } = useHttp();
  // const [message, setMessage] = useState(null);
  // const auth = useContext(AuthContext);

  return (
    <Page className={classes.root} title="Login">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Действительный адрес email")
                .max(255)
                .required("Email обязателен"),
              password: Yup.string().max(255).required("Пароль обязателен"),
            })}
            onSubmit={async (values) => {
              try {
                // const data = await request("/api/auth/login", "POST", {
                //   email: values.email,
                //   password: values.password,
                // });
                // auth.login(data.token, data.userId);
                // setMessage(data.message);
              } catch (error) {}
              history.push("/app/dashboard");
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                {/* <Box mb={3}>
                  <Typography color="textPrimary" variant="h2">
                    Войти
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Авторизуйтесь на внутренней платформе
                  </Typography>
                </Box> */}
                <Box mt={3} mb={1}>
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    Войти MarketPlace
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Пароль"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Войти сейчас
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Нет аккаунта?{" "}
                  <Link component={RouterLink} to="/register" variant="h6">
                    Зарегистрироваться
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
          {/* <Toast
            open={!!message}
            handleClose={() => setMessage(null)}
            text={message}
          /> */}
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
