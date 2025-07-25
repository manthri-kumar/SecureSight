// components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">SecureSight</h1>
      <div className="space-x-4">
        <button className="bg-gray-700 px-4 py-2 rounded">Settings</button>
      </div>
    </nav>
  );
}
