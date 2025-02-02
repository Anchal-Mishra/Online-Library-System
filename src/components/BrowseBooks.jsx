import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector(state => state.books.filter(book => book.category === category));
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{category} Books</h1>
      <input 
        type="text" 
        placeholder="Search..." 
        className="w-full p-2 border border-gray-300 rounded-lg mb-4 bg-white"
        onChange={e => setSearch(e.target.value)}
      />
      <ul className="space-y-2">
        {books.filter(book => book.title.includes(search) || book.author.includes(search)).map(book => (
          <li key={book.id} className="p-2 border rounded-lg shadow-md bg-white">
            <Link className="text-sm font-semibold hover:underline" to={`/book/${book.id}`}>
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseBooks;
