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
query GetNotes($topic_id: String!){
    notes(
        topic_id: $topic_id,
        first:null
    )
    {
        edges{
            cursors
            time
            node{
                _id,
                title,
                profile_img,
                cloudinary_id,
                topic_id,
                desc,
                user{
                    image
                    name,
                    _id
                }
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