import React, { useState } from 'react';

type Incident = {
  id: number;
  time: string;
  cameraId: string;
  threatType: string;
  videoUrl: string;
  status?: string;
};

type Props = {
  incident: Incident | null;
  availableCameras?: string[];
};

const IncidentPlayer: React.FC<Props> = ({ incident, availableCameras = ['Cam 1', 'Cam 2', 'Cam 3'] }) => {
  const [uploadedVideos, setUploadedVideos] = useState<{ [cam: string]: string }>({});

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>, cam: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setUploadedVideos(prev => ({ ...prev, [cam]: videoURL }));
    }
  };

  if (!incident) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Select an incident to view</h2>
        <p className="mb-2 text-gray-600">Available Cameras & Upload:</p>
        <ul className="space-y-4">
          {availableCameras.map((cam, index) => (
            <li key={index} className="border p-3 rounded shadow-sm">
              <strong>{cam}</strong>
              <input
                type="file"
                accept="video/*"
                className="block mt-2"
                onChange={(e) => handleUpload(e, cam)}
              />
              {uploadedVideos[cam] && (
                <video src={uploadedVideos[cam]} controls className="mt-2 w-full max-w-md" />
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Incident Details</h2>
      <p><strong>Time:</strong> {incident.time}</p>
      <p><strong>Camera ID:</strong> {incident.cameraId}</p>
      <p><strong>Threat Type:</strong> {incident.threatType}</p>
      <p><strong>Status:</strong> {incident.status || 'Pending'}</p>
      <video src={incident.videoUrl} controls className="mt-4 w-full" />
    </div>
  );
};

export default IncidentPlayer;
