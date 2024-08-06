import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider, Stack } from "@mui/material";

const defaultTheme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={6}
          md={6}
          sx={{
            backgroundImage: 'url("src/assets/book.png")',
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        />
        <Grid
          p={5}
          item
          xs={12}
          sm={6}
          md={6}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <Stack direction="row" spacing={2} mb={3}>
              <img src="src/assets/book-icon.png" alt="Icon" />
              <Typography component="h1" variant="h5">
                Book Rent
              </Typography>
            </Stack>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <Divider
              sx={{ marginTop: 1, marginBottom: 2 }}
              orientation="horizontal"
            />
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                sx={{ marginTop: 1 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                backgroundColor="#00ABFF"
                sx={{ mt: 3, mb: 2 }}
              >
                LOGIN
              </Button>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="body2" display="block" gutterBottom>
                  Have not an account ?
                </Typography>
                <Link href="#" variant="body2">
                  {"Sign Up"}
                </Link>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
