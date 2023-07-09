import gql from 'graphql-tag';

export const USER_FIELDS_FRAGMENT = gql`
        fragment userFields on users {
            uid
            email
            firstname
            lastname
            title
            phone
            is_phone_verified
            phone_verification_code
            photourl
            is_active
            is_employee
            is_email_verification_sent
            is_email_verified
            created_at
            updated_at
            last_sign_in
        }

`