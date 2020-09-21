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
const getTestimonialsQuery = gql`
  {
    testimonials {
      id
      name
      project
      comment
    }
  }
`;
const addTestimonialMutation = gql`
  mutation(
    $name: String!
    $email: String!
    $project: String!
    $comment: String!
  ) {
    addTestimonial(
      name: $name
      email: $email
      project: $project
      comment: $comment
    ) {
      name
      project
      comment
    }
  }
`;
export {
  getKitchensQuery,
  getBedroomsQuery,
  getBathroomsQuery,
  getLivingAreasQuery,
  getTestimonialsQuery,
  addTestimonialMutation,
};
