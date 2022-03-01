import React, { useEffect, useContext, useRef, useState } from 'react';
import { StyledButton } from '../Opening/OpeningStyles';
import { BiSend } from 'react-icons/bi';
import "aos/dist/aos.css";
import Aos from 'aos';
import {
    ContactSection, ContactContainer,
    FormRow, ContactInfo, ContactItem, PhoneIcon, MailIcon,
    LocationIcon, ContactWrapper, SubmitMessage
} from './ContactStyles';
import { SwitchContext } from '../../App';
import emailjs from 'emailjs-com';
import { SectionTittle } from '../Atoms/SectionTittle';

function Contact() {

    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    const context = useContext(SwitchContext);

    const formRef = useRef();


    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gth9vx5', 'template_sx41lbv', formRef.current, 'user_MgNMAUrK5PER6nKU3sX0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

        setSent(true);
    };

    return (
        <ContactSection id="contact" toggle={context.toggle}>
            <ContactWrapper >
                <SectionTittle toggle={context.toggle}>
                    <div data-aos="fade-down">
                        <h2 toggle={context.toggle}>Contact Me</h2>
                        <h3>Get in Touch</h3>
                    </div>
                </SectionTittle>
                <ContactContainer toggle={context.toggle}>
                    <ContactInfo data-aos="fade-up-right">
                        <ContactItem toggle={context.toggle}>
                            <PhoneIcon />
                            <div>
                                <h3>Call Me</h3>
                                <p>+48 535-618-931</p>
                            </div>
                        </ContactItem>
                        <ContactItem toggle={context.toggle}>
                            <MailIcon />
                            <div>
                                <h3>E-mail</h3>
                                <p>wojtek99955@gmail.com</p>
                            </div>
                        </ContactItem>

                        <ContactItem toggle={context.toggle}>
                            <LocationIcon />
                            <div>
                                <h3>Location</h3>
                                <p>Poznań, Poland</p>
                            </div>
                        </ContactItem>
                    </ContactInfo>
                    <form ref={formRef} onSubmit={sendEmail} data-aos="fade-up">
                        <FormRow>
                            <input type="text" name="name" placeholder="Name" required></input>
                            <input type="text" name="lastname" placeholder="Last Name" required></input>
                        </FormRow>
                        <FormRow>
                            <input type="email" name="email" placeholder="E-mail" required></input>
                            <input type="tel" name="tel" placeholder="Phone" required></input>
                        </FormRow>
                        <textarea name="message" cols="30" rows="10" placeholder="Message" required></textarea>
                        <StyledButton>Send Message<i><BiSend /></i></StyledButton>
                        {sent ? <SubmitMessage toggle={context.toggle}> Message sent successfully! </SubmitMessage> : null}
                    </form>
                </ContactContainer>
            </ContactWrapper>
        </ContactSection>
    )
}

export default Contact
