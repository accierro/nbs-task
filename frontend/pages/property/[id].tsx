import { GetServerSideProps } from "next";
import { PropertyDetails } from "../../components/PropertyDetails";
import { BASE_NAME } from "../../config/api";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getServerSideProps: GetServerSideProps = async (context) => {
  const key = "/property/" + context.params?.id;
  const url = BASE_NAME + key;
  try {
    const propertyInfo = await fetcher(url);

    return {
      props: {
        fallback: {
          [key]: propertyInfo
        }
      }
    };
  } catch (e) {
    return {
      props: {
        notFound: true
      }
    };
  }
};

export default PropertyDetails;
