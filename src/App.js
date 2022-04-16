import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProtectet from "./components/authentication/AuthProtectet";
import Login from "./components/authentication/Login";
import Layout from "./components/layout/Layout";
import AddPost from "./components/post/AddPost";
import PostDetail from "./components/post/PostDetail";
import PostList from "./components/post/PostList";
import DashBoard from "./container/DashBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthProtectet/>}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/posts" element={<PostList />}>
            <Route path=":id" element={<PostDetail />} />
          </Route>
          <Route path="new-post" element={<AddPost />} />
          </Route>
      </Route>
    </Routes>
  );
}

export default App;
