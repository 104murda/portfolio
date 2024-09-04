import React from 'react'

import "./style.css"

import gitHubIcon from "./gitHub-black.svg"

export default function BtnGitHub() {
    return (
        <>
            <a href="#!" className="btn-outline">
                <img src={gitHubIcon} alt="" />
                GitHub repo
            </a>
        </>
    )
}
