import gql from "graphql-tag";
import { USER_FIELDS_FRAGMENT } from "~/graphQl/fragments/userFragments/userFieldsFragments";


export const FETCH_USERS_BY_EMAIL = gql`

${USER_FIELDS_FRAGMENT}

query fetchUserByEmail($email: String!) {
  list_aggregate: users_aggregate(where: {email: {_eq: $email}}) {
    totalCount: aggregate {
      totals: count
    }
  }
  list: users(where: {email: {_eq: $email}}) {
    # ...userFields
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
}`;