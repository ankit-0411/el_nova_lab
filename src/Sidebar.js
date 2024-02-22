// Sidebar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { makeApiCall } from "./utils/data";

function Sidebar() {
  const [sidebarMenu, setSidebarMenu] = useState([]);

  useEffect(() => {
    const fetchSidebarMenu = async () => {
      try {
        const sidebarMenuResponse = await makeApiCall("/sidebarMenu/menuItems");
        if (Array.isArray(sidebarMenuResponse)) {
          setSidebarMenu(sidebarMenuResponse);
        } else {
          console.error("Invalid sidebar menu response:", sidebarMenuResponse);
        }
      } catch (error) {
        console.error("Error fetching sidebar menu:", error);
      }
    };

    fetchSidebarMenu();
  }, []);

  return (
    <div className="sidebar">
      <div>
        {sidebarMenu && sidebarMenu.length > 0 ? (
          sidebarMenu.map((menuItem, index) => (
            <ul key={menuItem.menuItemId}>
              <Link to={"/customers"}>
                <li>{menuItem?.menuGroupName}</li>
                <li>{menuItem?.menuItemName}</li>
              </Link>
            </ul>
          ))
        ) : (
          <p>No menu items available</p>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
