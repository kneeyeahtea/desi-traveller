"use client"
import { useEffect, useState } from "react"

export default function Home() {
  // No state variables needed for basic chatbot integration
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userId, setUserId] = useState("")

  useEffect(() => {
    // Initialize Chatbase when component mounts
    ;(() => {
      if (typeof window !== "undefined") {
        if (!window.chatbase || window.chatbase("getState") !== "initialized") {
          window.chatbase = { q: [] }
          const script = document.createElement("script")
          script.src = "https://www.chatbase.co/embed.js"
          script.async = true
          document.head.appendChild(script)

          // Initialize Chatbase configuration after script loads
          script.onload = () => {
            if (window.chatbase) {
              window.chatbase("config", {
                chatbotId: "RrkQrcZVuQXtDxctDqeMv",
                title: "Desi Traveler Assistant",
                description: "Ask me about travel destinations, itineraries, or local tips!",
                primaryColor: "#ff7e00",
              })
            }
          }
        }
      }
    })()

    // Mobile menu toggle functionality
    const mobileMenuBtn = document.getElementById("mobile-menu")
    const navMenu = document.getElementById("nav-menu")

    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active")
      })
    }
  }, [])

  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="container header-container">
          <div className="logo">
            <img
              src="https://media-hosting.imagekit.io//8ff05b26c9e8446b/Screenshot_2025-03-11_151803-removebg-preview.png?Expires=1836302698&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=hU6oN90TC50sAFcdqTdI1xqpyK7DEAT-ZN0xygTQhPm-yKb1GAMLSnAS1nvTkCK4KScp6ifPa~NgDHa7KswyWmQ3O4cNZAl5xa98ZNJ9F~Ab0gMH6bPZXh6zDcQKggIsKYxYy~PQFlRo8L3hk7bFw8OIfvtcyJnnw2gHxoAZy3e-5z2B36P7DHXv4MqmI854dLfRpuRKgcBlzOLE1yeEXAx30-CEPjlqv7GG-t9RxX17ATbjWeeJu-bOm~pBwmGkMqwEyhPaIl-7uc~pUlz6MRNZIjR0jEKBU5ZniqJojPiVO1vkd1BlJwD6xuz7-jlrPgRg-4GcrDZRPdZ9QTZSMg__"
              alt="Desi Traveler Logo"
            />
          </div>
          <nav>
            <ul id="nav-menu">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#chatbot">AI Chatbot</a>
              </li>
              <li>
                <a href="#hologram">Hologram Guide</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="mobile-menu-btn" id="mobile-menu">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </header>

      {/* Rest of your sections (Hero, Features, etc.) */}

      {/* Enhanced AI Chatbot Section */}
      <section className="chatbot" id="chatbot">
        <div className="container">
          <div className="chatbot-content">
            <h2 className="section-title">AI Travel Companion</h2>
            <p>
              Our intelligent chatbot assists you 24/7 with instant answers about destinations, recommendations, and
              emergency assistance during your travels.
            </p>
            <ul className="chatbot-features">
              <li>
                <i className="fas fa-check-circle"></i> Real-time weather updates and alerts
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Local food and restaurant recommendations
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Cultural norms and etiquette guidance
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Emergency contact information
              </li>
            </ul>
            <button
              className="btn chat-demo-btn"
              onClick={() => {
                if (typeof window !== "undefined" && window.chatbase) {
                  window.chatbase("open")
                }
              }}
            >
              Try Demo Now
            </button>
          </div>
          <div className="chatbot-visual">
            <div className="chatbot-demo">
              <div className="chatbot-window">
                <div className="chatbot-header">
                  <div className="chatbot-avatar">
                    <i className="fas fa-robot"></i>
                  </div>
                  <div className="chatbot-title">
                    <h4>Desi Travel Assistant</h4>
                    <p>Online</p>
                  </div>
                </div>
                <div className="chatbot-messages">
                  <div className="message bot">
                    <p>Hello! I'm your Desi Travel Assistant. How can I help plan your perfect Indian adventure?</p>
                  </div>
                  <div className="message user">
                    <p>What are the best places to visit in Rajasthan?</p>
                  </div>
                  <div className="message bot">
                    <p>
                      Great choice! Rajasthan offers incredible experiences like Jaipur's palaces, Udaipur's lakes,
                      Jodhpur's blue city, and Jaisalmer's desert. When are you planning to visit?
                    </p>
                  </div>
                  <div className="message user">
                    <p>In November</p>
                  </div>
                  <div className="message bot typing">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>
                <div className="chatbot-input">
                  <input type="text" placeholder="Type your message..." disabled />
                  <button>
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining sections (Hologram, Testimonials, Contact, Footer) */}

      {/* Chatbase Widget Container */}
      <div id="chatbase-widget-container"></div>

      {/* Chatbase iframe integration */}
      <div className="chatbase-iframe-container">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/RrkQrcZVuQXtDxctDqeMv"
          width="100%"
          style={{ height: "600px", border: "none" }}
          title="Desi Traveler Chatbot"
        ></iframe>
      </div>

      <style jsx>{`
        /* All your existing styles */
        
        /* Enhanced Chatbot Demo Styles */
        .chatbot-demo {
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        
        .chatbot-window {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          height: 500px;
          display: flex;
          flex-direction: column;
        }
        
        .chatbot-header {
          background: #ff7e00;
          padding: 15px;
          display: flex;
          align-items: center;
          color: #fff;
        }
        
        .chatbot-avatar {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
        }
        
        .chatbot-avatar i {
          font-size: 22px;
        }
        
        .chatbot-title h4 {
          margin: 0;
          font-size: 16px;
        }
        
        .chatbot-title p {
          margin: 2px 0 0;
          font-size: 12px;
          opacity: 0.8;
        }
        
        .chatbot-messages {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          background: #f5f5f5;
          display: flex;
          flex-direction: column;
        }
        
        .message {
          max-width: 80%;
          margin-bottom: 15px;
          border-radius: 10px;
          padding: 12px 15px;
          animation: fadeIn 0.3s ease;
        }
        
        .message p {
          margin: 0;
        }
        
        .bot {
          align-self: flex-start;
          background: #fff;
          border-bottom-left-radius: 2px;
        }
        
        .user {
          align-self: flex-end;
          background: #ff7e00;
          color: #fff;
          border-bottom-right-radius: 2px;
        }
        
        .typing {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 20px;
          width: 80px;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          background: #aaa;
          border-radius: 50%;
          margin: 0 3px;
          animation: bounce 1.5s infinite;
          opacity: 0.6;
        }
        
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        .chatbot-input {
          display: flex;
          padding: 15px;
          background: #fff;
          border-top: 1px solid #eee;
        }
        
        .chatbot-input input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 25px;
          outline: none;
          font-size: 14px;
        }
        
        .chatbot-input button {
          width: 40px;
          height: 40px;
          background: #ff7e00;
          color: #fff;
          border: none;
          border-radius: 50%;
          margin-left: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .chatbot-input button:hover {
          background: #e06c00;
        }
        
        .chat-demo-btn {
          margin-top: 20px;
        }
        
        /* Chatbase iframe container */
        .chatbase-iframe-container {
          margin: 50px auto;
          max-width: 800px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
        
        /* Responsive adjustments for the chatbot demo */
        @media (max-width: 992px) {
          .chatbot-window {
            height: 400px;
          }
        }
        
        @media (max-width: 768px) {
          .chatbot-window {
            height: 350px;
          }
          
          .message {
            max-width: 90%;
          }
        }
      `}</style>
    </div>
  )
}

// Add type declaration for window.chatbase
declare global {
  interface Window {
    chatbase: any
  }
}

