import gql from "graphql-tag";

export const CHAPTER_FIELDS_FRAGMENTS = gql`
    fragment chapterFields on chapter_number {
        id
        number_of_chapter
        slug
        created_at
        updated_at
        post_id  
        post {
            title
            slug 
            type
        }
    }
`