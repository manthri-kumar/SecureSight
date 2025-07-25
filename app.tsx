import { useEffect, useState } from 'react';
import Navbar from './src/components/Navbar';
import IncidentPlayer from './src/components/IncidentPlayer';
import IncidentList from './src/components/IncidentList';

// Define the Incident type
type Incident = {
  id: number;
  time: string;
  cameraId: string;
  threatType: string;
  videoUrl: string;
  status?: string;
};

export default function App() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/incidents')
      .then((res) => res.json())
      .then((data: Incident[]) => setIncidents(data));
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-2/3 p-4 overflow-auto">
          <IncidentPlayer incident={selectedIncident} />
        </div>
        <div className="w-1/3 p-4 bg-gray-50 overflow-auto">
          <IncidentList
            incidents={incidents}
onSelect={(incident) => setSelectedIncident(incident)}
            selectedId={selectedIncident?.id}
          />
        </div>
      </div>
    </div>
  );
}
