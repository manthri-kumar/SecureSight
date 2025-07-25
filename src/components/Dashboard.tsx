import React from 'react';

export default function Dashboard() {
  const cameraVideos = [
    { cam: 2, src: '/videos/video2.mp4' },
    { cam: 3, src: '/videos/video3.mp4' },
    { cam: 4, src: '/videos/video4.mp4' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 shadow">
        <div className="text-xl font-bold">SecureSight</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400">Dashboard</a>
          <a href="#" className="hover:text-gray-400">Cameras</a>
          <a href="#" className="hover:text-gray-400">Scenes</a>
          <a href="#" className="hover:text-gray-400">Incidents</a>
          <a href="#" className="hover:text-gray-400">Users</a>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="user.png"
            alt="User Avatar"
            className="rounded-full w-6 h-6"
          />
          <div>
            <div className="text-sm font-medium">Kumar</div>
            <div className="text-xs text-gray-400">kumar@example.com</div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Incident Player/Main Feed */}
        <div className="md:col-span-2 space-y-4">
          <div className="relative bg-black rounded-xl overflow-hidden shadow-lg">
            <video src="/videos/video1.mp4" controls className="w-full h-96 object-cover" />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-xs px-2 py-1 rounded">
              9/7/2025 - 03:12:37 | Camera - 01
            </div>
            <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded">
              MAIN CAMERA
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cameraVideos.map(({ cam, src }) => (
              <div key={cam} className="bg-black rounded-xl overflow-hidden shadow">
                <video src={src} controls className="w-full h-32 object-cover" />
                <div className="px-2 py-1 text-xs text-gray-300">Camera - 0{cam}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Incident List */}
        <div className="bg-gray-800 rounded-xl p-4 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">15 Unresolved Incidents</h2>
            <a href="#" className="text-sm text-blue-400 hover:underline">
              View 4 resolved incidents
            </a>
          </div>

          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-gray-700 p-3 rounded-lg hover:bg-gray-600"
              >
                {/* Thumbnail */}
                <img
                  src="/cam2.png"
                  alt="Preview"
                  className="w-16 h-16 rounded object-cover"
                />

                {/* Incident Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {/* Incident Icon */}
                    <div className="w-3 h-3 bg-orange-500 rounded-sm" />
                    <div className="font-medium text-white">Unauthorised Access</div>
                  </div>

                  {/* Camera Location */}
                  <div className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                    <span className="material-icons text-sm">videocam</span>
                    Shop Floor Camera A
                  </div>

                  {/* Timestamp */}
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    <span className="material-icons text-sm">schedule</span>
                    14:35 - 14:37 on 7-Jul-2025
                  </div>
                </div>

                {/* Resolve Button */}
                <button className="text-yellow-400 text-sm font-semibold hover:underline">
                  Resolve &gt;
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

