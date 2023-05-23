import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const DeleteUsers = () => {
    const [utilisateurs, setUtilisateurs] = useState([]);
    useEffect(() => {
        fetchUtilisateurs();

    }, []);
    const fetchUtilisateurs = async () => {
        try {
        // Effectuer une requête GET vers votre backend pour récupérer la liste des        utilisateurs
        const response = await axios.get('https://629ef3cd461f8173e4dc8dcd.mockapi.io/api/utilisateur');
        setUtilisateurs(response.data);
        console.log("users",response.data);
        } catch (error) {
        console.error(error);
        }
        
        };
        const supprimerUtilisateur = async (id) => {
            // eslint-disable-next-line no-restricted-globals
            if(confirm("êtes vous sure de vourloir supprimer cet utilisateur ?"))
            {
            try {
            // Effectuer une requête DELETE vers votre backend pour supprimer
            
            await axios.delete(`https://629ef3cd461f8173e4dc8dcd.mockapi.io/api/utilisateur/${id}`);
            fetchUtilisateurs(); // Mettre à jour la liste des utilisateurs après la
            
            } catch (error) {
            console.error(error);
            }
        }
            };


    return (
        <div>
        <h1>Liste des Utilisateurs</h1>
        <ul>
{utilisateurs.map((utilisateur) => (
    <li key={utilisateur.id}>
    {utilisateur.nom} - {utilisateur.email}
    <button onClick={() =>
    supprimerUtilisateur(utilisateur.id)}>Supprimer</button>
    </li>
    ))}
        </ul>
        </div>
  )
}
