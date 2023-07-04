import React from 'react';
import '../Style/Componentscss/Herosection.css';

function Herosection() {
    return (
        <>
            <div className='Herosection_Hyderabad'>
                <div className='Herosec_Backimg'>
                </div>
                <div className='Herosec_Bothcontent'>
                    <div className='Herosec_Content'>
                        <div className='Content_Web'>
                            <h1>Web3 Development</h1>
                        </div>
                        <div className='Content_Blockchain'>
                            <h1>Blockchain  Development
                                company in hyderabad</h1>
                        </div>
                        <div className='Content_Webpara'>
                            <p>Web 3.0 is the title used to describe the third internet generation. Data is interconnected in a
                                decentralized way, making Web 3.0 an intelligent web experience. In addition to allowing users to own
                                their data, web 3.0 also pays them for the time they spend online. Mega-centralized platforms are
                                disappearing with the introduction of Web 3.0.</p>
                        </div>
                    </div>
                    <div className='Herosec_Form'>
                        <form className='Form_Head'>
                            <div className='Form_Heading'>
                                <h3>Talk to our experts</h3>
                            </div>
                            <div className='Form_Name'>
                                <input type='text' placeholder='Enter name' />
                            </div>
                            <div className='Form_Email'>
                                <input type='text' placeholder='Enter email' />
                            </div>
                            <div className='Form_Subject'>
                                <input type='text' placeholder='Enter subject' />
                            </div>
                            <div className='Form_Number'>
                                <label>IND +91</label>
                                <input type='text' placeholder='Enter number (optional)' />
                            </div>
                            <div className='Form_line'>
                                <hr />
                            </div>
                            <div className='Form_Submit'>
                                <input type='submit' value='Send' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export { Herosection };