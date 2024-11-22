# Summary-GPT

A powerful book summary generator that uses OpenAI's API to create concise summaries of any book. Built with vanilla JavaScript and deployed across Netlify (frontend) and Render (backend).

## 🌐 Live Demo

Visit [Summary-GPT](https://summary-gpt.netlify.app)

## 📖 About

Summary-GPT is a tool that leverages AI to generate comprehensive summaries of books. Simply enter a book title, select your preferred language, and get an AI-generated summary within seconds. Perfect for readers, students, and book enthusiasts who want to maintain a collection of book summaries.

## ✨ Features

- **Quick Summaries**: Generate concise book summaries using OpenAI's powerful language models
- **Multi-Language Support**: Get summaries in different languages
- **Clean Interface**: Minimalist design for distraction-free reading
- **Responsive Design**: Works seamlessly on all devices
- **Save Summaries**: Build your personal collection of book summaries

## 💻 Tech Stack

### Frontend
- **Vanilla JavaScript**: Pure JavaScript without any frameworks
- **HTML5 & CSS3**: Modern, responsive design
- **Fetch API**: For making API calls to the backend

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **OpenAI API**: For generating book summaries

### Deployment
- **Frontend**: Netlify
- **Backend**: Render.com

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/your-username/summary-gpt.git
cd summary-gpt
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Set up environment variables
```bash
# Backend .env
OPENAI_API_KEY=your_openai_api_key
CORS_ORIGIN=your_frontend_url
PORT=3000
```

4. Start the development servers
```bash
# Backend
npm start

# Frontend - simply open index.html in your browser
# or use a local server like Live Server
```




## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
