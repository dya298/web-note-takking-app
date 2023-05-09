import { gql } from "@apollo/client";

export const LOAD_TOPICS = gql`
query{
    topics{
        _id,
        title
    }
}
`

export const LOAD_NOTES = gql`
query{
    notes(
        first:1
    )
    {
        edges{
            cursors
            time
            node{
                _id
            } 
        }
        pageInfo
        {
            startCursor
            endCursor
            hasNextPage
        }
        totalCount
    }
}
`