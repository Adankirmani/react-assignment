
import React from "react";
import "./App.css";

// Task 1: ProductCard Component

function ProductCard({ title, price, category, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />

      <h2>{title}</h2>
      <p>Price: Rs. {price}</p>
      <p>Category: {category}</p>
    </div>
  );
}

// Task 2: LikeButton Component
function LikeButton() {
  const [likes, setLikes] = React.useState(0);

  return (
    <div className="like-box">
      <h2>Likes: {likes}</h2>
      <button onClick={() => setLikes(likes + 1)}>
        Like 👍
      </button>
    </div>
  );
}

// Task 3: Students List Component
function StudentsList() {
  const students = [
    { id: 1, name: "Ali", score: 75 },
    { id: 2, name: "Sara", score: 40 },
    { id: 3, name: "Ahmed", score: 50 },
    { id: 4, name: "Ayesha", score: 30 },
  ];

  return (
    <div className="students-box">
      <h2>Students Result</h2>

      {students.map((student) => (
        <div className="student-card" key={student.id}>
          <h3>{student.name}</h3>
          <p>Score: {student.score}</p>

          {student.score >= 50 ? (
            <p className="pass">Pass</p>
          ) : (
            <p className="fail">Fail</p>
          )}
        </div>
      ))}
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div className="app">
      <h1>React Assignment</h1>

      <h2>Task 1: Product Cards</h2>

    
<ProductCard
  title="Wireless Headphones"
  price={3500}
  category="Electronics"
  image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
/>

<ProductCard
  title="Smart Watch"
  price={5000}
  category="Accessories"
  image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
/>

      <hr />

      <h2>Task 2: Like Button</h2>
      <LikeButton />

      <hr />

      <h2>Task 3: Students List</h2>
      <StudentsList />
    </div>
  );
}

export default App;