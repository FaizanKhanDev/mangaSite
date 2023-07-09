import gql from "graphql-tag";
import { CHAPTER_FIELDS_FRAGMENTS } from "~/graphQl/fragments/chapterFragments/chapterFieldsFragments";

// export const fetchChapters = gql`
//        query myQuery {
//         chapter_number{
//             id
//             number_of_chapter
//             slug
//             created_at
//             updated_at
//             post_id

//         }
//     }


// `;
export const FETCH_CHAPTER = gql`
        query getChapters {
            chapter_number {
                 ...chapterFields

            }
        }
    ${CHAPTER_FIELDS_FRAGMENTS}

`;