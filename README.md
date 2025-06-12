# Meeting of the Minutes (MoM) Generator – AI-Powered Automation

An intelligent system that automates the process of generating meeting minutes by combining real-time transcription, attendance tracking, and automated documentation.

## 🌟 Features

- **Real-time Transcription**: Convert speech to text during meetings
- **Smart Documentation**: Generate structured meeting minutes automatically
- **User-friendly Interface**: Modern and intuitive UI built with React
- **Secure Backend**: Robust API and data management system

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Bootstrap
- Material-UI

### Backend
- Node.js & Express.js
- Python
- MongoDB
- Machine Learning Models
  - Face Recognition
  - Speech-to-Text
  - Natural Language Processing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python 3.8+
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/mom-generator.git
cd mom-generator
```

2. Install Frontend Dependencies
```bash
cd MoM_Frontend
npm install
```

3. Install Backend Dependencies
```bash
cd ../backend
npm install
```

4. Install Python Dependencies
```bash
pip install -r requirements.txt
```

### Environment Setup

Create a `.env` file in the root directory with the following variables:
```env
# API Keys
GROQ_API_KEY=your_groq_api_key_here
HUGGING_FACE_AUTH_TOKEN=your_huggingface_token_here

# Database
MONGODB_URI= your mongodb uri

# Server
PORT=3000
```

### Running the Application

1. Start the Frontend (in MoM_Frontend directory)
```bash
npm run dev
```

2. Start the Backend Server (in backend directory)
```bash
npm run start
```

3. Start the Python Services (in root directory)
```bash
python main.py
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## 📝 Project Structure

```
mom-generator/
├── MoM_Frontend/          # React frontend application
├── backend/              # Node.js backend server
├── models/              # Machine learning models
├── uploads/            # Temporary file storage
├── main.py            # Python main service
└── requirements.txt   # Python dependencies
```

## 🔒 Security

- All API keys and sensitive information are stored in environment variables
- Authentication and authorization implemented for secure access
- Data encryption for sensitive information




## 👥 Authors

- Sanskar Dagade
- Tanishka Dhole 

