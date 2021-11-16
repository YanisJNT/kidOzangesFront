
import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { Comment,Icon, Modal } from 'semantic-ui-react'
import './style.css'



//const date = new Date()

function Comments({ listComment }) {
  useEffect(() => {
    document.title = "Commentaire"
 }, []);
  
  const token = localStorage.getItem("token")
  const [open, setOpen] = useState(false)
  
  

  const handleReportComment = async (commentId,index) => {
    setOpen(true)
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
  delete(listComment[index])
  setTimeout(()=>setOpen(false),1300)
  
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
                    <Comment.Text>{com.description} <Icon title="signaler ce commentaire" color="red" onClick={()=>handleReportComment(com.id,index)}  className="exclamation triangle" size="small" ></Icon></Comment.Text>
                  </Comment.Content>
                </div>
                
              </Comment>
            )
          })
        }
        
      </Comment.Group>
      <Modal
      closeIcon
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      
      <Modal.Content>
        <p id="alert__modal">
         Merci, ce commentaire a bien été signalé.
        </p>
      </Modal.Content>
    </Modal>
    </>
  )
}
export default Comments
