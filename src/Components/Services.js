import React from 'react';
import '../Style/Componentscss/Services.css';

function Services() {
    return (
        <>
            <div className='Service_Background'>
                <div className='Service_Body'>
                    <div className='Service_Head'>
                        <h1>Web 3.0 Development Service</h1>
                    </div>
                    <div className='Service_Nftbox'>
                        <div className='Service_Nft'>
                            <div className='Nft_Heading'>
                                <h3>NFTs</h3>
                            </div>
                            <div className='Nft_Para'>
                                <p>NFTs, give Web 3.0 access to a unique, digital
                                    asset that may be retrieved or paid using
                                    cryptocurrencies.</p>
                            </div>
                        </div>
                    </div>
                    <div className='Service_Metablock'>
                        <div className='Service_Meta'>
                            <div className='Meta_Heading'>
                                <h3>Metaverse</h3>
                            </div>
                            <div className='Meta_Para'>
                                <p>Web 3.0 serves as the Metaverse's backbone
                                    where machines build experiences by using
                                    virtual resources.</p>
                            </div>
                        </div>
                        <div className='Service_Block'>
                            <div className='Blocks_Headings'>
                                <h3>Blockchain Development</h3>
                            </div>
                            <div className='Blocks_Paras'>
                                <p>Get full-cycle blockchain development. We
                                    address all your needs, from initial advising to
                                    final delivery.</p>
                            </div>
                        </div>
                    </div>
                    <div className='Service_Custombox'>
                        <div className='Service_Custom'>
                            <div className='Custom_Heading'>
                                <h3>Custom Business Needs</h3>
                            </div>
                            <div className='Custom_Para'>
                                <p>Depending on the requirements, we create
                                    customized web 3.0 games, apps, and social
                                    networking platforms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Services };