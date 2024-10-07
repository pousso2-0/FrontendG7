import React, { useEffect, useState } from 'react';
import { userService } from '../../services/userService';
import UserProfile from '../../components/profile/UserProfile';
import Layout from '../../components/squelette/Layout'; 


const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await userService.getCurrentUser();
        console.log('Profil utilisateur récupéré :', profile); // Afficher le profil complet dans la console
        setUserProfile(profile.data); // Mettre uniquement les données de l'utilisateur
      } catch (error) {
        console.error('Erreur lors de la récupération du profil :', error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  console.log('Données utilisateur transmises au composant UserProfile :', userProfile); 

  return (
    <Layout>
      <div className="container mt-5">
        <h1>{userProfile.name}'s Profile</h1>
        <UserProfile user={userProfile} />
      </div>
    </Layout>
   
  );
};

export default ProfilePage;
