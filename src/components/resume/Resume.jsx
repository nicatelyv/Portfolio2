import React from 'react'
import "./resume.css"

function Resume() {
    return (
        <div className='resume'>
            <div>
                <div className='resumeImg'></div>
                {/* <a target='/' href="https://drive.google.com/file/d/1bQGy_KzY0YkfylRMAZqkL_arllEZ5NHL/view?usp=sharing"> */}
                {/* </a> */}
            </div>
            <a className='downloadBtn' href="https://drive.usercontent.google.com/u/8/uc?id=1qOLwLsS3s8Eg91g2eKY-j6u1po2pBo72&export=download"><button>Download</button></a>
        </div>
    )
}

export default Resume
