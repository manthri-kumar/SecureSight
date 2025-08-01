# SecureSight Dashboard 🔐📹

A modern, responsive, and real-time **security camera monitoring dashboard** built using **Next.js**, **Tailwind CSS**, and **TypeScript**. SecureSight provides a centralized interface to visualize camera feeds, detect incidents, and track security events through an interactive timeline.

---

## 🚀 Features

- 🎥 **Live Camera Feeds** with incident overlays
- 🕒 **Timeline View** to track events across cameras
- 📋 **Incident List** panel for quick summary
- ⚠️ Smart icons for **Unauthorized Access**, **Congestion**, etc.
- 📱 Fully responsive design using Tailwind CSS
- ⚛️ Modular and reusable components

---

## 🧱 Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State/Data**: Local mock data (`src/data/`)

---

## 📂 Project Structure

securesight-dashboard/
├── public/
│ └── assets/ # Images and icons
├── src/
│ ├── app/ # App Router pages
│ │ ├── page.tsx # Main dashboard
│ │ └── layout.tsx # Root HTML layout
│ ├── components/ # UI components
│ │ ├── IncidentPlayer.tsx
│ │ ├── IncidentTimeline.tsx
│ │ ├── IncidentList.tsx
│ │ ├── Header.tsx
│ │ └── CameraPreview.tsx
│ ├── data/ # Mock event and camera data
│ │ ├── events.ts
│ │ └── cameras.ts
│ └── types/ # TypeScript interfaces
│ └── index.ts
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🛠️ Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/securesight-dashboard.git
cd securesight-dashboard
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the development server
bash
Copy
Edit
npm run dev
Now visit http://localhost:3000 in your browser 🚀

📦 Dependencies
bash
Copy
Edit
npm install next react react-dom
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react
Initialize Tailwind (if not already done):

bash
Copy
Edit
npx tailwindcss init -p
🧪 Mock Data Format
events.ts
ts
Copy
Edit
export const events = [
  {
    id: 1,
    cameraId: 'camera-1',
    type: 'unauthorized-entry',
    time: '10:15 AM',
    description: 'Unauthorized access detected at Gate A',
  },
  ...
]
cameras.ts
ts
Copy
Edit
export const cameras = [
  {
    id: 'camera-1',
    name: 'Entrance Camera',
    location: 'Main Gate',
    image: '/assets/camera1.jpg',
  },
  ...
]
🧠 Future Improvements
Integrate with real-time API for live camera streams

Add authentication & user roles

Notifications for critical incidents

Exportable incident logs

Mobile native app integration

🤝 Contributing
Fork the project

Create your feature branch: git checkout -b feature/new-feature

Commit your changes: git commit -m 'Add new feature'

Push to the branch: git push origin feature/new-feature

Open a Pull Request

🛡️ License
This project is licensed under the MIT License. See LICENSE for more details.

📬 Contact
Kumar Manthri – GitHub | Email

