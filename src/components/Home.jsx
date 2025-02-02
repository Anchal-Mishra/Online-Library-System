import { Link } from "react-router-dom";

const Home = () => (
  <div className="text-center" >
    <h1 className="text-4xl font-bold mb-6">Welcome to the Online Library</h1>
    <h2 className="text-2xl font-semibold mb-4">Categories</h2>
    <div className="flex justify-center space-x-4">
      {['Fiction', 'Non-Fiction', 'Sci-Fi'].map(category => (
        <Link key={category} className="bg-indigo-400 px-4 py-2 rounded-lg hover:bg-blue-400 font-semibold" to={`/books/${category}`}>
          {category}
        </Link>
      ))}
    </div>
    <h2 className="text-2xl font-semibold mt-6 ">Popular Books</h2>
    <ul className="mt-2">
      <li><Link className="text-green-900 hover:underline text-xl" to="/books/Fiction">1984</Link></li>
      <li><Link className="text-green-900 hover:underline text-xl" to="/books/Non-Fiction">Sapiens</Link></li>
    </ul>
  </div>
);

export default Home;
