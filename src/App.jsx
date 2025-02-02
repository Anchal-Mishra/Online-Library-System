import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import BrowseBooks from "./components/BrowseBooks";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";
import NotFound from "./components/NotFound";

const App = () => (
  <Router>
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div className="text-xl font-bold">📚 Online Library</div>
      <div className="space-x-4">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/books/Fiction">Browse Books</Link>
        <Link className="hover:underline" to="/add-book">Add Book</Link>
      </div>
    </nav>
    <div className="p-6 h-158 bg-cover bg-center bg-no-repeat backdrop-blur-xl" 
    style={{ backgroundImage: "url('https://media.istockphoto.com/id/1896776304/photo/white-open-space-office-interior-with-bookcases.jpg?s=612x612&w=0&k=20&c=DsWB1ZkcsvOTxeXvA1qU-lk9NiBnKEeuRevvtpkNTzE=')" }} >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
);

export default App;
