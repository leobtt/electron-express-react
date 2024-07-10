import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/message")
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch((error) => {
                console.error("Erro ao buscar a mensagem:", error);
            });
    }, []);
    console.log("message", message);
    return (
        <div>
            <h1>Olá, Electron! Hello World!!!</h1>
            <p>{message}</p>
        </div>
    );
};

export default App;
