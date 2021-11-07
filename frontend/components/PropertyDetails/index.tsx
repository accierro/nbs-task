import { SWRConfig } from "swr";
import { Details } from "./Details";

type Props = any;

export const PropertyDetails = ({ fallback }: Props) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Details />
    </SWRConfig>
  );
};
