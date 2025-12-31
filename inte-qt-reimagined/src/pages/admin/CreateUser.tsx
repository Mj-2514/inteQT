import { useState } from "react";

const API = import.meta.env.DEV ? "http://localhost:5000" : "https://inteqt.onrender.com";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

 const submit = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/auth/create-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      email,
      tempPassword,   // 🔥 MUST be tempPassword, not password
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.log(data);
    throw new Error(data.message || "Create user failed");
  }

  alert("User created successfully");
};


  return (
    <div className="p-10 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create User</h1>

      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} className="input text-black"/>
      <input placeholder="Email (@inte-qt.com)" value={email} onChange={e=>setEmail(e.target.value)} className="input mt-3 text-black"/>
      <input placeholder="Temporary Password" value={tempPassword} onChange={e=>setTempPassword(e.target.value)} className="input mt-3 text-black"/>

      <button onClick={submit} className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">
        Create User
      </button>

      {msg && <p className="mt-4 text-sm text-emerald-600">{msg}</p>}
    </div>
  );
}
