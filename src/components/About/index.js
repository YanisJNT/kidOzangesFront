import './style.css'
import Logo from '../../img/Yanis.png'
import Fred from '../../img/Fred.jpeg'
import { Card, Image } from 'semantic-ui-react'
export default function About() {

    return (
        <div id="about">
            <Card>
                <Image src={Logo} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Yanis</Card.Header>
                    <Card.Meta>
                        <span className='about--name'>Developpeur FrontEnd / Lead Dev Front</span>
                    </Card.Meta>
                    <Card.Description>
                        Yanis, 18 ans Développeur FrontEnd/Lead Dev
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                </Card.Content>
            </Card>
            <Card>
                <Image src={Fred} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Fredéric</Card.Header>
                    <Card.Meta>
                        <span className='about--name'>Developpeur BackEnd</span>
                    </Card.Meta>
                    <Card.Description>
                        Frédéric,  41 ans, Développeur BackEnd
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                </Card.Content>
            </Card><Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Fabien</Card.Header>
                    <Card.Meta>
                        <span className='name'>Développeur BackEnd / Lead Dev BackEnd</span>
                    </Card.Meta>
                    <Card.Description>
                        Fabien, 29 ans, Développeur BackEnd / Lead Developpeur BackEnd
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                </Card.Content>
            </Card><Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Alexandre</Card.Header>
                    <Card.Meta>
                        <span className='name'>Développeur FrontEnd</span>
                    </Card.Meta>
                    <Card.Description>
                        Alexandre, 37 ans, Développeur FrontEnd
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                </Card.Content>
            </Card><Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Cossi</Card.Header>
                    <Card.Meta>
                        <span className='name'>Cossi, Développeur FrontEnd</span>
                    </Card.Meta>
                    <Card.Description>
                        Cossi, 26 ans, Développeur FrontEnd.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                </Card.Content>
            </Card>
        </div>
    )
};
