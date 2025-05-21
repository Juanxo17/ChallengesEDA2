import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import './MenuStyles.css';
import Menu from './Menu';

import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';

import DesarrolloWeb from './pages/DesarrolloWeb';
import DisenoUIUX from './pages/DisenoUIUX';
import MarketingDigital from './pages/MarketingDigital';

import Software from './pages/Software';
import Hardware from './pages/Hardware';
import Consultoria from './pages/Consultoria';

import Tutoriales from './pages/Tutoriales';
import Noticias from './pages/Noticias';
import Eventos from './pages/Eventos';

function MenuSidebar() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const [menu, setMenu] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  
  useEffect(() => {
    const newMenu = new Menu();
    
    newMenu.crearMenu([
      'Inicio', 
      'Servicios', 
      'Productos', 
      'Blog', 
      'Contacto'
    ]);
    
    newMenu.agregarSubmenu('Servicios', [
      'Desarrollo Web', 
      'Diseño UI/UX', 
      'Marketing Digital'
    ]);
    
    newMenu.agregarSubmenu('Productos', [
      'Software', 
      'Hardware', 
      'Consultoría'
    ]);
    
    newMenu.agregarSubmenu('Blog', [
      'Tutoriales', 
      'Noticias', 
      'Eventos'
    ]);
    
    setMenu(newMenu);
    
    if (newMenu.raiz) {
      setMenuItems(newMenu.raiz.hijos);
    }
  }, []);
  
  const toggleSubmenu = (index) => {
    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      setActiveMenu(index);
    }
  };

  const handleItemClick = (path) => {
    navigate(path);
  };

  const getPath = (text) => {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  return (
    <div className="menu-sidebar">
      <h3 className="menu-title">CHALLENGE 15</h3>
      <ul className="menu-list">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <div 
              className="menu-item" 
              onClick={() => {
                toggleSubmenu(index);
                handleItemClick(`/${getPath(menuItem.valor)}`);
              }}
            >
              {menuItem.valor}
            </div>
            {menuItem.hijos && menuItem.hijos.length > 0 && (
              <ul className={`submenu ${activeMenu === index ? 'active' : ''}`}>
                {menuItem.hijos.map((submenu, subIndex) => (
                  <li 
                    key={subIndex} 
                    className="submenu-item"
                    onClick={() => handleItemClick(`/${getPath(menuItem.valor)}/${getPath(submenu.valor)}`)}
                  >
                    {submenu.valor}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="challenge-container">
        <MenuSidebar />
        
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />
            
            <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
            <Route path="/servicios/diseno-uiux" element={<DisenoUIUX />} />
            <Route path="/servicios/marketing-digital" element={<MarketingDigital />} />
            
            <Route path="/productos/software" element={<Software />} />
            <Route path="/productos/hardware" element={<Hardware />} />
            <Route path="/productos/consultoria" element={<Consultoria />} />
            
            <Route path="/blog/tutoriales" element={<Tutoriales />} />
            <Route path="/blog/noticias" element={<Noticias />} />
            <Route path="/blog/eventos" element={<Eventos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;