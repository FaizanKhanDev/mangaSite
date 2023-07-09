import gql from "graphql-tag";
import { CHAPTER_FIELDS_FRAGMENTS } from "~/graphQl/fragments/chapterFragments/chapterFieldsFragments";

// export const fetchChaptersBySlug = gql`
//   query myQuery($slug: String!) {
//     chapter_number(where: { slug: { _eq: $slug } }) {
//       id
//       number_of_chapter
//       slug
//       created_at
//       updated_at
//       post_id 
//       post {
//         title
//         slug 
//         type
//       }

//     }
//   }
// `;


export const FETCH_BY_CHAPTER_BY_SLUG = gql`
  query getChapter($slug: String!) {
    chapter_number(where:{slug: {_eq:$slug}}) {
        ...chapterFields
    }
  }
  ${CHAPTER_FIELDS_FRAGMENTS}
`