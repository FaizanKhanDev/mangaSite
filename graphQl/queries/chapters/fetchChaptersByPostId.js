import gql from "graphql-tag";
import { CHAPTER_FIELDS_FRAGMENTS } from "~/graphQl/fragments/chapterFragments/chapterFieldsFragments";


// export const fetchChaptersByPostId = gql`
//        query myQuery($post_id: Int!) {
//         chapter_number(where:{post:{id:{_eq:$post_id}}}){
//             id
//             number_of_chapter
//             slug
//             created_at
//             updated_at
//             post_id

//         }
//     }


// `;

export const FETCH_CHAPTER_BY_POST_ID = gql`
    query getChapterByPostId($post_id: Int!) {
        chapter_number(where:{post:{id:{_eq:$post_id}}}) {
            ...chapterFields
        }

    }
    ${CHAPTER_FIELDS_FRAGMENTS}
`