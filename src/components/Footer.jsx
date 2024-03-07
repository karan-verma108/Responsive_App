import React from 'react';

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <>
            <footer>
                <p style={{ fontSize: '17px', fontWeight: 'bold' }} className='text-center mt-5 my-3'>Made with 💖 by Karan | {date} </p>
            </footer>
        </>
    )
}

export default Footer