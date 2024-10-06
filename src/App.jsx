import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import EditPost from "./EditPost";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <DataProvider>
        <div className="w-full max-w-4xl mx-auto px-4">
          <Header title="React Js Blog" />
          <Nav />
          <main className="flex-grow flex items-center justify-center">
            <div className="w-full border border-gray-300 rounded-md overflow-y-auto h-[calc(100vh-200px)]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/newpost" element={<NewPost />} />
                <Route path="/edit/:id" element={<EditPost />} />
                <Route path="/posts/:id" element={<PostPage />} />
                <Route path="*" element={<Missing />} />
              </Routes>
            </div>
          </main>
        </div>
        <Footer />
      </DataProvider>
    </div>
  );
};

export default App;
