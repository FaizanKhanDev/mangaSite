import gql from 'graphql-tag';
import { POST_FIELD_FRAGMENTS } from "~/graphQl/fragments/PostFragments/postFieldFragments.js";


// export const fetchPostsByTypes = gql`
//     query myQuery($type: String!) {
//         post(where: { type: { _eq: $type } }) {
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
//             chapter_number {
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
//         }
//     }
// `;


export const FETCH_POST_BY_TYPE = gql`
    query getPostsByType($type: String!) {
        post(where: { type: { _eq: $type } }) {
            ...postFields
        }
    }
    ${POST_FIELD_FRAGMENTS}        
` ;