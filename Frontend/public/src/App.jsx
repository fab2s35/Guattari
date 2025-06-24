import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout.jsx';
import PrivateLayout from './layouts/PrivateLayout.jsx';
import { useEffect, useState } from 'react';

// --- Páginas públicas ---
import MainPage from './Pages/Public/MainPage/MainPage';
import AboutUs from './Pages/Public/AboutUs/AboutUs';
import Estancias from './Pages/Public/Estancias/Estancias';
import Contactanos from './Pages/Public/Contactanos/Contactanos';
import Productos from './Pages/Public/Productos/Productos';
import Register from './Pages/Public/Register/Register';
import Login from './Pages/Public/Login/Login';
import Profile from './Pages/Public/Profile/Profile';
import VerifyCode from './Pages/Public/VerifyCode/VerifyCode';
import RecoverPassword from './Pages/Public/RecoverPassword/RecoverPassword';
import AddCode from './Pages/Public/AddCode/AddCode';
import NewPassword from './Pages/Public/NewPassword/NewPassword';

// --- Páginas privadas ---
import Inventory from './Pages/Private/Inventory/Inventory';
import Proveedores from './Pages/Private/Proveedores/Proveedores';
import Sucursales from './Pages/Private/Sucursales/Sucursales';
import Branch from './Pages/Private/Addbranch/branch';
import Reviews from './Pages/Private/Reviews/Reviews';
import AddInv from './Pages/Private/addInv/addInventory';
import Employee from './Pages/Private/Employees/Employee';
import AdminHome from './Pages/Private/MainPage/mainPage';

// --- Rutas protegidas por rol ---
import AdminRoute from './routes/AdminRoute';
import EmployeeRoute from './routes/EmployeeRoute';
import ClientRoute from './routes/ClientRoute';
import NotAuthorized from './pages/NotAuthorized';

function App() {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    setUserType(storedUserType);
  }, []);

  return (
    <Router>
      <Routes>

        {/* Layout público */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/estancias" element={<Estancias />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/categorias/:id" element={<Productos />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/RecoverPassword" element={<RecoverPassword />} />
          <Route path="/AddCode" element={<AddCode />} />
          <Route path="/NewPassword" element={<NewPassword />} />
        </Route>

        {/* Rutas protegidas por rol */}
        <Route
          path="/bienvenidaAdmin"
          element={
            <AdminRoute>
              <AdminHome />
            </AdminRoute>
          }
        />

        <Route
          path="/bienvenidaEmpleado"
          element={
            <EmployeeRoute>
              <Employee />
            </EmployeeRoute>
          }
        />

        <Route
          path="/MainPage"
          element={
            <ClientRoute>
              <MainPage />
            </ClientRoute>
          }
        />

        {/* Layout privado */}
        <Route
          element={
            <EmployeeRoute>
              <PrivateLayout />
            </EmployeeRoute>
          }
        >
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="/sucursales" element={<Sucursales />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/addInv" element={<AddInv />} />
          <Route path="/employee" element={<Employee />} />
        </Route>

        {/* Ruta de acceso denegado */}
        <Route path="/not-authorized" element={<NotAuthorized />} />

      </Routes>
    </Router>
  );
}

export default App;