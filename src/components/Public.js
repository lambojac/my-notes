import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">kenny Growth Community!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Lagos Nigeria! <br/> Kenny Growth Community Empowers Employee Admin And Managers And Aassigned Them their Difffrent Roles.</p>
                <address className="public__addr">
                    Kenny Growth Community<br />
                    Lagos State<br />
                    Nigeria<br/>
                    <a href="tel:+2347035897528">(703)-589-7528</a>
                </address>
                <br />
                <p>Owner:Kenny Growth</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public