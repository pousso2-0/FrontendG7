import React from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from "../../services/userService";

const Dropdown = ({ userImage, userName, userStatus, items }) => {
  const navigate = useNavigate();

  const handleProfileClick = async (e) => {
    e.preventDefault();
    try {
      const userProfile = await userService.getCurrentUser(); // Appelle l'endpoint pour obtenir le profil
      // Vous pouvez stocker les données de l'utilisateur dans un contexte ou un état global si nécessaire
      console.log(userProfile); // Pour déboguer ; vous pouvez l'enlever par la suite
      navigate('/profile'); // Remplacez par le chemin vers votre page de profil
    } catch (error) {
      console.error('Erreur lors de la récupération du profil :', error);
    }
  };

  return (
    <div className="sub-drop dropdown-menu caption-menu show">
      <div className="card shadow-none m-0">
        <div className="card-header bg-primary">
          <div className="header-title">
            <h5 className="mb-0 text-white">Hello {userName}</h5>
            <span className="text-white font-size-12">{userStatus}</span>
          </div>
        </div>
        <div className="card-body p-0">
          {items.map((item, index) => (
            <a 
              href={item.link} 
              className={`iq-sub-card iq-bg-${item.bgColor}-hover`} 
              key={index} 
              onClick={item.title === 'My Profile' ? handleProfileClick : undefined}
            >
              <div className="d-flex align-items-center">
                <div className={`rounded card-icon bg-soft-${item.bgColor}`}>
                  <i className={item.icon}></i>
                </div>
                <div className="ms-3">
                  <h6 className="mb-0">{item.title}</h6>
                  <p className="mb-0 font-size-12">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
          <div className="d-inline-block w-100 text-center p-3">
            <a className="btn btn-primary iq-sign-btn" href="../dashboard/sign-in.html" role="button">
              Sign out<i className="ri-login-box-line ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
