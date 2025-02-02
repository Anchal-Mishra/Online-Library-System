import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/bookSlice";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", author: "", category: "", description: "", rating: "" });

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.category) return;
    dispatch(addBook({ ...formData, id: Date.now() }));
    navigate(`/books/${formData.category}`);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Add a New Book</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input className="w-full p-2 border rounded bg-gray-200" type="text" placeholder="Title" required onChange={e => setFormData({ ...formData, title: e.target.value })} />
        <input className="w-full p-2 border rounded bg-gray-200" type="text" placeholder="Author" required onChange={e => setFormData({ ...formData, author: e.target.value })} />
        <input className="w-full p-2 border rounded bg-gray-200" type="text" placeholder="Category" required onChange={e => setFormData({ ...formData, category: e.target.value })} />
        <textarea className="w-full p-2 border rounded bg-gray-200" placeholder="Description" onChange={e => setFormData({ ...formData, description: e.target.value })} />
        <input className="w-full p-2 border rounded bg-gray-200" type="number" placeholder="Rating" onChange={e => setFormData({ ...formData, rating: e.target.value })} />
        <button className="w-full bg-gray-700 py-2 rounded-lg hover:bg-gray-600 font-bold" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
