import { Card, CardContent, CircularProgress } from "@mui/material/node";

const Loading = () => {
  return (
    <>
      {/* <CircularProgress color="success" /> */}
      <CardContent sx={{ bgcolor: "white", justify: "center" }}>
        <CircularProgress color="secondary" />
      </CardContent>
      {/* <CircularProgress color="inherit" /> */}
    </>
  );
};

export default Loading;
