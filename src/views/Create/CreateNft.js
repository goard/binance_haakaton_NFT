import { useFormik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
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
}));

const CreateNft = (props) => {
  const { registerMeme } = props;
  const classes = useStyles();
  const validationSchema = Yup.object({
    file: Yup.mixed().required("Загрузите медиа"),
    name: Yup.string("Введите название NFT token")
      .max(255)
      .required("Имя обязательно"),
    price: Yup.number("Введите цену NFT token").required("Цена обязательна"),
    // createdOn: yup.date().default(function () {
    //   return new Date();
    // }),
  });

  const formik = useFormik({
    initialValues: { file: null, fileUrl: null, name: "", price: "" },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        let addressArr = await window.ethereum.selectedAddress;
        await registerMeme({
          address: addressArr,
          fileBuffer: values.file,
          name: values.name,
          price: values.price,
        });
        console.log(values);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const uploadMedia = (file) => {
    let fileReader = new FileReader();
    fileReader.onload = function (e) {
      // The file's text will be printed here
      formik.setFieldValue("fileUrl", e.target.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
        <Card className={classes.card}>
          <input
            className={classes.input}
            accept="image/*"
            id="file"
            type="file"
            name="file"
            onChange={(event) => {
              formik.setFieldValue("file", event.currentTarget.files[0]);
              uploadMedia(event.currentTarget.files[0]);
            }}
          />

          <CardMedia
            // className={classes.cardMedia}
            component="img"
            image={
              formik.values.file
                ? formik.values.fileUrl
                : "https://via.placeholder.com/500x300?text=Visit+Blogging.com+NowC/O https://placeholder.com/"
            }
            // title={formik}
          />
          <CardContent className={classes.cardContent}>
            <label htmlFor="file">
              <IconButton component="span">
                <AddPhotoAlternateIcon fontSize="large" color="secondary" />
              </IconButton>
            </label>
            <TextField
              fullWidth
              label="Имя"
              margin="normal"
              name="name"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.name}
              helperText={formik.touched.name && formik.errors.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
            />
            <TextField
              error={Boolean(formik.touched.price && formik.errors.price)}
              fullWidth
              helperText={formik.touched.price && formik.errors.price}
              label="Цена"
              margin="normal"
              name="price"
              onChange={formik.handleChange}
              value={formik.values.price}
              variant="outlined"
            />
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              disabled={formik.isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Создать NFT
            </Button>
          </CardActions>
        </Card>
        <Box display="flex" justifyContent="center"></Box>
      </form>
    </Container>
  );
};

export default CreateNft;
