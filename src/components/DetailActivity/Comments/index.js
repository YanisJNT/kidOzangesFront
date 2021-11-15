import axios from 'axios'
import React from 'react'
import { Comment, Icon } from 'semantic-ui-react'
import './style.css'



//const date = new Date()


function Comments({ listComment }) {
  const token = localStorage.getItem("token")
  
  const handleReportComment = async (commentId) => {
    try {
       await axios.patch(`https://kidozanges.herokuapp.com/api/user/reportcomment`, {report:'true'}, {
          params: {
              id: commentId
          },
          headers: {
              authorization: `Bearer ${token}`,
          },
      })
      
      
  } catch (error) {
      console.error(error)
  }
  }


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
                    <Comment.Text>{com.description} <Icon onClick={()=>handleReportComment(com.id)}  className="exclamation triangle" size="small" ></Icon></Comment.Text>
                      
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
