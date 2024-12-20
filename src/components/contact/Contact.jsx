
const Contact = () => {
    return (
        <section id="contact" className="section-white">
            <div className="container">
                <div className="section-title">
                    <h2>CONTACT US</h2>
                    <hr />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quasi totam similiquedignissimos voluptatem fugiat reprehenderit <br /> aliquid odio nostrum nihil.</p>
                </div>
                <div className="contact-content">
                    <form id="contact-form">
                        <div className="contact-info">
                            <div className="company-phone">
                                <h4>Mobile Number</h4>
                                <p>+135 773 321 4442</p>
                            </div>
                            <div className="company-email">
                                <h4>Email Address</h4>
                                <p>demo@demo.com</p>
                            </div>
                        </div>
                        <h3> Make An Appoinment</h3>
                        <input className="input" type="text" name="name" placeholder="Your Name" />
                        <input className="input"  type="email" name="mail" placeholder="Your Email" />
                        <textarea className="input"  name="message" id="message" placeholder="Your Message" style={{height:"144px"}}></textarea>
                    </form>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47763.67457272848!2d35.864406713363024!3d41.56427386799142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4088984b9dfe0e95%3A0xdd34bf6997b023ed!2sBafra%2C%20Samsun!5e0!3m2!1str!2str!4v1728082184088!5m2!1str!2str"
                        width="50%" height="450" style={{ border: 'none', borderRadius: '8px' }} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}
export default Contact;
