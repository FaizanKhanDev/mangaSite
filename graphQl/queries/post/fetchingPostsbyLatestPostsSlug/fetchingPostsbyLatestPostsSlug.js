import gql from "graphql-tag";
import { POST_FIELD_FRAGMENTS } from "~/graphQl/fragments/PostFragments/postFieldFragments.js";

// export const fetchingPostsbyLatestPostsSlug = gql`
//         query MyQuery($slug: String!) {
//         post(where: {slug: {_eq: $slug}}) {
//             title
//             slug
//             is_published
//             created_at
//             updated_at
//             content_text
//             parent_id
//             author_id
//             publisher_id
//             summary
//             type
//             chapter_number  {
//                 id
//                 number_of_chapter
//                 slug
//                 created_at
//             }
//             post_category {
//                 category {
//                     title
//                     slug
//                     meta_title


//                 }
//             }
//     }
// }`;

export const FETCH_POST_WITH_SLUG = gql`
  query GetPostsWithSlugData($slug: String!) {
    post(where: {slug: { _eq:$slug  }}) {
      ...postFields
    }
  }
  ${POST_FIELD_FRAGMENTS}
`;