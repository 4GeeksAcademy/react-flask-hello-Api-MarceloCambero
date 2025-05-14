import React, { useEffect, useState } from "react";

const Private = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = sessionStorage.getItem("token");

        if (!token) {
            setError("⚠️ No autorizado. Redirigiendo...");
            setTimeout(() => {
                window.location.href = "/login";
            }, 2000);
            return;
        }

        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/private`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.user) {
                    setUser(data.user);
                } else {
                    setError("⚠️ Token inválido. Redirigiendo...");
                    setTimeout(() => {
                        window.location.href = "/login";
                    }, 2000);
                }
            })
            .catch(() => {
                setError("❌ Error al validar");
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2>Zona Privada</h2>
            {user && (
                <div className="alert alert-success">
                    Bienvenido, <strong>{user.email}</strong> (ID: {user.id})
                </div>
            )}
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default Private;
