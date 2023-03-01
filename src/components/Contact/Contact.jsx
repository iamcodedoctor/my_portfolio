import React from "react";
import { RiMailOpenLine, RiPhoneLine, RiGithubLine } from "react-icons/ri";

const Contact = () => {
    return (
        <div className="main my-4" id="contact">
            <h1 className="title">Contact Me</h1>
            <div>
                <p className="mt-4 mb-2">
                    Currently I am looking dor a full time job. Feel free to
                    contact me if there are any opportunities.
                </p>
                <h4 className="my-2">
                    <RiMailOpenLine style={{fontSize: '40px', marginRight:'20px'}} />
                    khareniraj23@gmail.com
                </h4>
                <h4 className="my-2">
                    <RiPhoneLine style={{fontSize: '40px', marginRight:'20px'}} />
                    +91 9370468105
                </h4>
                <h4 className="my-2">
                    <RiGithubLine style={{fontSize: '40px', marginRight:'20px'}} />
                    <a href="https://github.com/iamcodedoctor" target={"blank"}>
                        github.com/iamcodedoctor
                    </a>
                </h4>
            </div>
        </div>
    );
};

export default Contact;
