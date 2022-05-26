import AddPostForm from "./components/AddPostForm";
import PostsList from "./components/PostsList";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import SinglePost from "./components/SinglePost";
import EditPostForm from "./components/EditPostForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePost />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
