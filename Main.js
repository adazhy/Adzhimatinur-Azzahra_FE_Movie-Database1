import React from 'react';
//import hello
import Hello from "./Component/Hello";

//Membuat Komponen Main/isi
//Mengirim props name dan jurusan kekomponen Hello
const Main = () => {
    return (
        <main>
            <Hello name="Ziko" major="Kedokteran" />
            <Hello name="Vio" major="Matematika"/>
            <Hello name="Raina" major= "Kimia"/>
        </main>
    );
};

//Export main
export default Main;

