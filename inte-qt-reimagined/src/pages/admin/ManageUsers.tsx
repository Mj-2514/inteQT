import { useEffect, useState } from "react";

const API = import.meta.env.DEV ? "http://localhost:5000" : "https://inteqt.onrender.com";

export default function DeletedUsers() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API}/api/users/deleted`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then(r => r.json())
      .then(setUsers);
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Deleted Users</h1>
      {users.map(u => (
        <div key={u._id} className="border p-4 rounded mb-4">
          {u.email}
        </div>
      ))}
    </div>
  );
}
