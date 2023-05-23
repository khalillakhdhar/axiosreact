/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import axios from 'axios'

export default function CreateUser() {
    const [nom, setNom] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault(); // preventDefault() is used to prevent the browser's default action of submitting the form to the server.

        const nouvelUtilisateur = {
            nom,
           // email
            };
            //alert(nouvelUtilisateur.nom + " " + nouvelUtilisateur.email);
            try {
                const response = await axios.post('https://629ef3cd461f8173e4dc8dcd.mockapi.io/api/utilisateur', nouvelUtilisateur);
                console.log(response);
                // on peut faire window.location.reload(); pour recharger la page
                // mais on va plutôt utiliser le state pour recharger la page
                setNom('');
                setEmail('');


            } catch (error) {
            console.log(error);
            }


    }
  return (
    <form onSubmit={handleSubmit}>
<label>
Nom:
<input
type="text"
value={nom}
onChange={(e) => setNom(e.target.value)}
/>
</label>
<label>
Email:
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
</label><button type="submit">Créer Utilisateur</button>
</form>
);
};
