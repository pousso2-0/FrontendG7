import React from 'react';

const Sidebar = () => {
  return (
    <div className="iq-sidebar sidebar-default">
      <div id="sidebar-scrollbar">
        <nav className="iq-sidebar-menu">
          <ul id="iq-sidebar-toggle" className="iq-menu">
            <li className="active">
              <a href="../dashboard/index.html" className="">
                <i className="las la-newspaper"></i><span>Newsfeed</span>
              </a>
            </li>
            <li>
              <a href="../app/profile.html" className="">
                <i className="las la-user"></i><span>Profile</span>
              </a>
            </li>
            <li>
              <a href="../app/group.html" className="">
                <i className="las la-users"></i><span>Group</span>
              </a>
            </li>
            <li>
              <a href="../app/todo.html" className="">
                <i className="las la-check-circle"></i><span>Todo</span>
              </a>
            </li>
            <li>
              <a href="../dashboard/calendar.html" className="">
                <i className="las la-calendar"></i><span>Calendar</span>
              </a>
            </li>
            {/* Ajoutez d'autres éléments de menu ici */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
