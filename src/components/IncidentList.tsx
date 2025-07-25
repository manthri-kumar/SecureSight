type Incident = {
  id: number;
  time: string;
  cameraId: string;
  threatType: string;
  videoUrl: string;
  status?: string;
};

type Props = {
  incidents: Incident[];
  onSelect: (incident: Incident) => void;
  selectedId?: number;
};

const IncidentList: React.FC<Props> = ({ incidents, onSelect, selectedId }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Incidents</h2>
      <ul>
        {incidents.map((incident) => (
          <li
            key={incident.id}
            onClick={() => onSelect(incident)}
            className={`cursor-pointer p-2 border-b ${
              selectedId === incident.id ? 'bg-gray-200' : ''
            }`}
          >
            <p>{incident.time} — {incident.threatType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncidentList;
