import React from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'

const Comments = () => {
  const comments = [
    { user: "alex", commentaire: "blablabla" },
    { user: "rolex", commentaire: "bluild,lhndknhblabla" },
    { user: "bistouflex", commentaire: "La meilleur cachette c'est les toilettes" }
  ]
//console.log("free",response)


  return (
    <div>
      {
        comments.map((com) =>
        <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author>{com.user}</Comment.Author>
        <Comment.Metadata>
          <div>1 day ago</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>
          {com.commentaire}
          </p>
        </Comment.Text>
      </Comment.Content>
    </Comment>
    </Comment.Group>
    
        )}
        
  
    </div>
  )
}

export default Comments
