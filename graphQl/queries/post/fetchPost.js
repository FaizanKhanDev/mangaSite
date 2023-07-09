import gql from "graphql-tag";
import { POST_FIELD_FRAGMENTS } from "~/graphQl/fragments/PostFragments/postFieldFragments.js";

// export const fetchingPostData = gql`
//           query myQuery{
//             post {
//                 id
//                 title
//                 slug
//                 is_published
//                 created_at
//                 updated_at
//                 content_text
//                 parent_id
//                 author_id
//                 publisher_id
//                 summary
//                 type
//                 post_category {
//                   category {
//                     id
//                     title
//                     slug
//                   }
//                 }
//                 chapter_number{
//                     id
//                     number_of_chapter
//                     created_at
//                     post_id
//                     slug
//               }
//             }
//     } `;


export const FETCH_ALL_POST_DATA = gql`
  query GetAllPosts {
        post{
        ...postFields
      }
  }
  ${POST_FIELD_FRAGMENTS}
`;