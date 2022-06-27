import { Grid, Loading } from "@nextui-org/react";

export default function App() {
  return (
    <Grid.Container gap={2}>
      <Grid>
        <Loading type="points" />
      </Grid>
    </Grid.Container>
  );
}
