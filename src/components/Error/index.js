import { Icon } from 'semantic-ui-react'

import './style.css'
export default function Error({userRedirect,error}){
    return(
        <div>
            {userRedirect === false ? (
            <div className="box--error">
              <h4>Erreur d'insciption : {error.length}   <Icon disabled name='level down alternate' /></h4>
              <ol>
                <p>{error[0]}</p>
                <p>{error[1]}</p>
                <p>{error[2]}</p>
                <p>{error[3]}</p>
              </ol>
            </div>
          ) : null}
        </div>
    )
}