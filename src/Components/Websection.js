import React from 'react';
import '../Style/Componentscss/Websection.css';

function Web() {
    return (
        <>
            <div className='Web_Body'>
                <div className='Web_Image'> 
                    <div className='Web_Img'></div>
                </div>
                <div className='Web_Content'>
                    <div className='Web_Heading'>
                        <h3>We Will Help You With Web 3.0</h3>
                    </div>
                    <div className='Web_Paraone'>
                        <p>We have a strong, experienced team that works with you to understand your
                            needs and offers advice on the best strategy for your company's growth. We
                            ensure that the products we develop provide value to both your investment
                            and to consumers. We will always be intrigued by your concept and would like
                            to know more.  Contact our specialists by setting up a call right away.</p>
                    </div>
                    <div className='Web_Paratwo'>
                        <p>Infograins respects your privacy and never divulges your information to third
                            parties.</p>
                    </div>
                    <div className='Web_btn'>
                        <button className='Web_Click'><span>Click Me</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Web };