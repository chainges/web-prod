import * as styles from "./signupEmail.module.css"

import React, { useEffect, useState } from "react";

import axios from 'axios'

const SignupEmail = (props) => {
    let [email, setEmail] = useState("");

    let fieldClass = "w-4/5 sm:w-3/5 sm:mr-6 md:w-2/5 md:mr-6 " + styles.emailField;
    let submitClass = "rounded-full mt-4 sm:mt-0 " + styles.submitBtn;
    return (
        // <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        // </div>
        <div className="container text-center mb-8 mx-auto">
            <form name="email-waiting-list" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <div className={styles.formGroup}>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className={fieldClass} placeholder="Email"></input>
                    <button type="submit" name="submit" className={submitClass}>Join the waiting list</button>
                </div>
            </form>
        </div>
    );
}

export default SignupEmail;
