import React from 'react';
import '../Style/Componentscss/Blocksection.css';

function Blocks() {
    return (
        <>
            <div className='Block_Body'>
                <div className='Block_Image'>
                    <div className='Block_Img'></div>
                </div>
                <div className='Block_Content'>
                    <div className='Block_Heading'>
                        <h3>Building Blocks of Web3.0</h3>
                    </div>
                    <div className='Block_Para'>
                        <p>The three basic building blocks of Web 3.0 are AI (Artificial Intelligence), IOT
                            (Internet of things) and Blockchain. IoT enables connectivity to smart devices.
                            In the future internet will not be restricted to only mobile, laptops, and PCs and
                            all smart gadgets will have access to everything owing to IoT. Artificial
                            Intelligence (AR) has played an important role in making this version of the
                            internet more intelligent and powerful in terms of information processing. The
                            decentralized aspect of Web 3.0 is achieved through the concepts of
                            decentralization.</p>
                    </div>
                    <div className='Block_Btn'>
                        <button className='btn'><span>Get Free Consultancy</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Blocks }; 