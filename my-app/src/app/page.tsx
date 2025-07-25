export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
        <div className="text-xl font-bold">SecureSight</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="hover:underline">Dashboard</a>
          <a href="#" className="hover:underline">Cameras</a>
          <a href="#" className="hover:underline">Scenes</a>
          <a href="#" className="hover:underline">Incidents</a>
          <a href="#" className="hover:underline">Users</a>
        </nav>
        <div className="flex items-center gap-3">
          <img src="/user.png" alt="User" className="w-8 h-8 rounded-full" />
          <div className="text-sm">
            <p className="font-semibold">Kumar</p>
            <p className="text-gray-500 dark:text-gray-400">kumar@gmail.com</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col md:flex-row p-4 gap-4">
        {/* Left Section: Main Feed */}
        <section className="md:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow p-4 space-y-4">
          <div className="relative bg-black rounded-lg overflow-hidden h-80">
            <video
              src="/videos/video1.mp4"
              controls
              autoPlay
              muted
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-xs font-semibold rounded">
              MAIN CAMERA
            </span>
            <div className="absolute bottom-4 left-4 text-sm text-white">
              Camera - 01 | 9/7/2025 - 03:12:37
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Camera - 02", src: "/videos/video1.mp4" },
              { label: "Camera - 03", src: "/videos/video2.mp4" },
              { label: "Camera - 04", src: "/videos/video3.mp4" },
            ].map((cam, i) => (
              <div key={i} className="relative bg-black rounded h-28 overflow-hidden">
                <video
                  src={cam.src}
                  muted
                  loop
                  autoPlay
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-white text-xs px-2 py-0.5 rounded">
                  {cam.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Section: Incident List */}
        <section className="md:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="mb-4">
            <h2 className="text-lg font-bold">15 Unresolved Incidents</h2>
            <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              View 4 resolved incidents
            </a>
          </div>

          <div className="space-y-4 overflow-y-auto max-h-[500px] pr-2">
            {[
              {
                type: "Unauthorized Access",
                camera: "Camera - 02",
                time: "9/7/2025 - 02:45:12",
                image: "/image.png",
              },
              {
                type: "Gun Threat",
                camera: "Camera - 03",
                time: "9/7/2025 - 01:33:47",
                image: "/image.png",
              },
              {
                type: "Unknown Entry",
                camera: "Camera - 01",
                time: "9/7/2025 - 00:15:24",
                image: "/cam2.png",
              },
            ].map((incident, idx) => (
              <div key={idx} className="flex gap-3 items-center">
                <img
                  src={incident.image}
                  alt={incident.type}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium">{incident.type}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {incident.camera} • {incident.time}
                  </p>
                </div>
                <button className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
                  Resolve &gt;
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
