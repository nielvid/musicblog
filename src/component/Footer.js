function Footer() {


    return (
        <footer>
            <div className='footer'>
                <div className="form_div container">
                    <h2>Get in Touch</h2>
                    <p>We would like to hear from you</p>
                    <form className=" contact_form">
                        <input type="text" placeholder="Name"></input>
                        <input type="text" placeholder="Email"></input>
                        <input type="text" placeholder="Subject"></input>
                        <input type="text" placeholder="Mesage" ></input>
                    </form>
                    <button type='submit'><a href="#">Submit</a></button>
                </div>
            </div>
            <div className="footer_links">
                <ul>
                    <li><a href="/">ABOUT</a></li>|
            <li><a href="/">SUBMIT MUSIC</a></li>|
            <li><a href="/">PRICING</a></li>|
            <li><a href="/">TERM OF USE</a></li>|
            <li><a href="/">API</a></li>|
            <li><a href="/">CONTACT</a></li>
                </ul>
                <div className="copyright">&copy; 2014 - 2020 | <a href="https://www.nielvid.com">NIELVID TECHNOLOGIES</a></div>
            </div>
        </footer>
    )
}

export default Footer;