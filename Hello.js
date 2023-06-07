import React from 'react';
/**
 * Membuat Component Hello
 * Mencetak Ui (elements)
 */

const Hello = (props) => {
    const { name, major } = props;
    return (
        <div className="Hello">
            <h2> Hai aku{ name } </h2>
            <p>Saya Mahasiswa { major }</p>
        </div>
    );
};

//Export Hello 
export default Hello;