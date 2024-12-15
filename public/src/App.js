import React from "react"; 
import "./main.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import { About } from "./pages/About";
import SetAvatar from "./components/SetAvatar";
import { Contacts } from "./pages/Contacts"
import Dashboard from "./components/Dashboard";
import News from "./components/news/News";
import CreateNews from "./components/news/CreateNews";
import EditNews from "./components/news/EditNews";
import DeleteNews from "./components/news/DeleteNews";
import Categories from "./components/categories/Categories";
import CreateCategory from "./components/categories/CreateCategory";
import EditCategory from "./components/categories/EditCategory";
import DeleteCategory from "./components/categories/DeleteCategory";
import Sculptor from "./components/sculptor/Sculptor";
import CreateSculptor from "./components/sculptor/CreateSculptor"
import EditAuthor from "./components/sculptor/EditSculptor"
import Sculpture from "./components/sculpture/Sculpture";
import CreateSculpture from "./components/sculpture/CreateSculpture"
import DeleteSculpture from "./components/sculpture/DeleteSculpture"
import Video from "./pages/Video";
import Room from "./pages/Room";
import NewsForum from "./pages/News";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<Navigate to="/home" />}/> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<News />} />
        <Route path="/createNews" element={<CreateNews />} />
        <Route path="/editNews/:id" element={<EditNews />} />
        <Route path="/deleteNews/:id" element={<DeleteNews />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/createCategory" element={<CreateCategory />} />
        <Route path="/editCategory/:id" element={<EditCategory />} />
        <Route path="/deleteCategory/:id" element={<DeleteCategory />} />
        <Route path="/sculptors" element={<Sculptor />} />
        <Route path="/createSculptor" element={<CreateSculptor />} />
        <Route path="/editAuthor/:id" element={<EditAuthor />} />
        <Route path="/sculptures" element={<Sculpture />} />
        <Route path="/createSculpture" element={<CreateSculpture />} />
        <Route path="/deleteSculpture/:id" element={<DeleteSculpture />} />
        <Route path="/video" element={<Video />} />
        <Route path="/room/:roomId" element={<Room/>}/>
        <Route path="/forum" element={<NewsForum/>}/> 
      </Routes>
    </BrowserRouter>
  );
}
