import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

const date = new Date()

const Comments = ({listComment}) => (
  <>
  <Comment.Group size='massive'>
  
  
 {
  listComment.map(com =>{
    return(
      <Comment>
      <Comment.Content>
        <Comment.Author as='a'>{com.nickname}</Comment.Author>
        
        <Comment.Metadata>
        {/*<span>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</span>*/}
        </Comment.Metadata>
        <Comment.Text>{com.description}</Comment.Text>
      </Comment.Content>
    </Comment>
    )
  })
}
  </Comment.Group>
        </>
      )


export default Comments
