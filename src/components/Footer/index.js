import './styles.css';
export default function Footer(){
    return(
        <footer>
            <div className="footer--container">
                <h2> Bonjour et bienvenue sur Kid Oz Anges, le portail de recherche d'activité ludique pour enfants</h2>
                <nav className="footer--nav">
                    <a href="/contact"> Contacts</a>
                    <a href="/aboutus">A propos</a>
                    <a href="/LegalNotice">Mention légales</a>
                </nav>
            </div>
        </footer>
    )
}