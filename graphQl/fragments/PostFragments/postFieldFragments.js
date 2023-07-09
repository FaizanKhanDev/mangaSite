import gql from 'graphql-tag';
export const POST_FIELD_FRAGMENTS = gql`
        fragment postFields on post {
        title
        slug
        is_published
        created_at
        updated_at
        content_text
        parent_id
        author_id
        publisher_id
        summary
        type
        chapter_number {
                id
                number_of_chapter
                slug
                created_at
        }
        post_category {
                id
                post_id
                category_id
                category {
                        title
                        slug
                        meta_title
                }
        }
}`;