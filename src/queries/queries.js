import { gql } from "apollo-boost";

const getKitchensQuery = gql`
  {
    kitchens {
      id
      name
      description
      pictureUrl
    }
  }
`;
const getBedroomsQuery = gql`
  {
    bedrooms {
      id
      name
      description
      pictureUrl
    }
  }
`;
const getBathroomsQuery = gql`
  {
    bathrooms {
      id
      name
      description
      pictureUrl
    }
  }
`;
const getLivingAreasQuery = gql`
  {
    livingAreas {
      id
      name
      description
      pictureUrl
    }
  }
`;
export {
  getKitchensQuery,
  getBedroomsQuery,
  getBathroomsQuery,
  getLivingAreasQuery,
};
