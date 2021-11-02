
import { Icon } from 'semantic-ui-react'

import './style.css'
export default function Error({ userRedirect, error }) {

  const runError = () => {
    const row = []
    for(let i = 0; i < error.length; i++){
      row.push(<li key={i}>{error[i]}</li>)
    }

    return row
  }


  return (
    <div id="error">
      {userRedirect === false ? (
        <div className="box--error">
          <h4>Erreur d'insciption : {error.length}   <Icon disabled name='level down alternate' /></h4>
          <ol>
            {
              runError()
            }
          </ol>

        </div>
      ) : null}
    </div>
  )
}