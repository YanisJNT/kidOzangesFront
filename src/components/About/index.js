import './style.css'
import { useEffect } from 'react'
import Yanis from '../../img/Yanis.png'
import Fred from '../../img/Fred.jpeg'
import Fabien from '../../img/Fabien.jpg'
import Alex from '../../img/Alex.jpg'
import Cossi from '../../img/Cossi.png'
import {Card} from 'semantic-ui-react'
export default function About() {

    useEffect(() => {
        document.title = "Qui sommes-nous"
     }, []);

    return (
        
        <div id="about">
            <Card className="box--card__aboutus">
                <img alt ="profil--Yanis" className="Image__card" src={Yanis} wrapped ui={false} alt="Photo dev" />
                <Card.Content>
                    <Card.Header>Yanis</Card.Header>
                    <Card.Meta>
                        <span className='about--name'>Dev Front </span>
                    </Card.Meta>
                    <Card.Description>
                       Lead Dev Front
                    </Card.Description>
                </Card.Content>
            </Card>
            <Card className="box--card__aboutus">
                <img className="Image__card" src={Fred} wrapped ui={false} alt="Photo dev" />
                <Card.Content>
                    <Card.Header>Fredéric</Card.Header>
                    <Card.Meta>
                        <span className='about--name'>Dev Back</span>
                    </Card.Meta>
                    <Card.Description>
                        Product Owner 
                    </Card.Description>
                </Card.Content>
                
            </Card>
            <Card className="box--card__aboutus">
                <img className="Image__card"  src={Fabien} wrapped ui={false} alt="Photo dev" />
                <Card.Content>
                    <Card.Header>Fabien</Card.Header>
                    <Card.Meta>
                        <span className='about--name'>Dev Back </span>
                    </Card.Meta>
                    <Card.Description>
                        Lead Dev Back 
                    </Card.Description>
                
                </Card.Content>
            </Card>
            <Card className="box--card__aboutus">
                <img className="Image__card"  src={Alex} wrapped ui={false} alt="Photo dev" />
                <Card.Content>
                    <Card.Header>Alexandre</Card.Header>
                    <Card.Meta>
                        <span className='about--name'>Dev Front</span>
                    </Card.Meta>
                    <Card.Description>
                      Scrum Master
                    </Card.Description>
                </Card.Content>
                
            </Card>
            <Card className="box--card__aboutus">
                <img className="Image__card"  src={Cossi} wrapped ui={false} alt="Photo dev"/>
                <Card.Content>
                    <Card.Header>Cossi</Card.Header>
                    <Card.Meta>
                        <span className='about--name'>Dev Front</span>
                    </Card.Meta>
                    <Card.Description>
                       Git Master
                    </Card.Description>
                </Card.Content>
                
            </Card>
        </div>
    )
};
