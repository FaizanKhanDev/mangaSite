import gql from "graphql-tag";


export const fetchingCategoriesBySlugData = gql`
    query myQuery($slug: String!) {
        category(where: { slug: { _eq: $slug } }) {
            title
            slug
            meta_title
            post_category {
                id
                post {
                    id
                    title
                    slug
                    summary
                    type
                    chapter_number {
                        number_of_chapter
                    }
                }
            }
        }
    }`;
