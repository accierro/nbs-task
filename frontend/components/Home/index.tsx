import { SWRConfig } from "swr";
import { Grid } from "./Grid";

type Props = any;

export const Home = ({ fallback }: Props) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Grid />
    </SWRConfig>
  );
};
