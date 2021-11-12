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
                        <span className='about--name'>Developpeur FrontEnd </span>
                    </Card.Meta>
                    <Card.Description>
                        Yanis Lead Développeur Front-End
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
                        Frédéric Développeur BackEnd 
                        Product Owner
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                </Card.Content>
            </Card><Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Fabien</Card.Header>
                    <Card.Meta>
                        <span className='name'>Développeur BackEnd </span>
                    </Card.Meta>
                    <Card.Description>
                        Fabien Lead Développeur BackEnd 
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
                        Alexandre Développeur FrontEnd & Scrum Master
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
                        Cossi Développeur FrontEnd & Git Master
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                </Card.Content>
            </Card>
        </div>
    )
};
