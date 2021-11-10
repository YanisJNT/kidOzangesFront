import React from 'react'
import { Comment } from 'semantic-ui-react'
import './style.css'


//const date = new Date()

function Comments({ listComment }) {
  console.log(listComment)
  return (
    <>
      <Comment.Group
        size='large'
        id="chat"
      >
        {
          listComment.map((com, index) => {
            return (
              <Comment key={index}  >
                <div id="commentairebg">
                  <Comment.Content>
                    <Comment.Author id="author" as='a'>{com.nickname}</Comment.Author>

                    <Comment.Metadata>
                      {/*<span>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</span>*/}
                    </Comment.Metadata>
                    <Comment.Text>{com.description}</Comment.Text>
                  </Comment.Content>
                </div>
              </Comment>
            )
          })
        }
      </Comment.Group>
    </>
  )
}

export default Comments
