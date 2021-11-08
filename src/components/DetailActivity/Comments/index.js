import React from 'react'
import { Comment } from 'semantic-ui-react'
import './style.css'


//const date = new Date()

const Comments = ({ listComment }) => (
  <>
    <Comment.Group
      size='large'
      id="chat"
    >
      {
        listComment.map((com, index) => {
          return (
            <Comment key={index}  >
              <Comment.Content>
                <Comment.Author id="author" as='a'>{com.nickname}</Comment.Author>

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
