import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector(state => state.books.find(b => b.id === parseInt(id)));
  const navigate = useNavigate();

  return book ? (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <button onClick={() => navigate(-1)}>Back to Browse</button>
    </div>
  ) : <h2>Book not found</h2>;
};

export default BookDetails;
