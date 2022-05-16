import React from 'react';

const Footer = () => {
    return (
        <div className="lg:bg-[url('/src/assets/images/footer.png')] bg-cover bg-center pt-10">
            <footer className="footer p-10 text-accent  py-20 lg:px-12">
                <div>
                    <span className="footer-title">Services</span>
                    <a href="!#" className="link link-hover">Emergency Checkup</a>
                    <a href="!#" className="link link-hover">Monthly Checkup</a>
                    <a href="!#" className="link link-hover">Weekly Checkup</a>
                    <a href="!#" className="link link-hover">Deep Checkup</a>
                </div>
                <div className='lg:px-20'>
                    <span className="footer-title">Oral Health</span>
                    <a href="!#" className="link link-hover">Fluoride Treatment</a>
                    <a href="!#" className="link link-hover">Cavity Filling</a>
                    <a href="!#" className="link link-hover">Teeth Whitening</a>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <p>New York - 101010 Hudson</p>
                </div>
            </footer>
            <div className="footer footer-center p-6 text-accent">
                <div>
                    <p className='font-semibold'>Copyright 2022 All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;