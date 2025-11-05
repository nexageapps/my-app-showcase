import React from 'react';
import './LearnAI.css';

function LearnAI() {
  const lessons = [
    {
      id: 1,
      title: "What is AI? 🤖",
      level: "Beginner",
      duration: "5 min read",
      description: "Start your AI journey! Learn what artificial intelligence really means and how it's changing our world.",
      topics: ["AI Basics", "Machine Learning", "Real-world Examples"],
      link: "https://nexageapps.github.io/ai-lessons/lesson-1-what-is-ai"
    },
    {
      id: 2,
      title: "How Machines Learn 🧠",
      level: "Beginner",
      duration: "7 min read",
      description: "Discover how computers can learn from data, just like humans learn from experience!",
      topics: ["Training Data", "Patterns", "Predictions"],
      link: "https://nexageapps.github.io/ai-lessons/lesson-2-machine-learning"
    },
    {
      id: 3,
      title: "AI in Your Pocket 📱",
      level: "Beginner",
      duration: "6 min read",
      description: "Explore how AI powers your favorite apps, from voice assistants to photo filters.",
      topics: ["Mobile AI", "Voice Recognition", "Image Processing"],
      link: "https://nexageapps.github.io/ai-lessons/lesson-3-ai-in-mobile"
    },
    {
      id: 4,
      title: "Building Your First AI 🛠️",
      level: "Intermediate",
      duration: "10 min read",
      description: "Ready to create? Follow along as we build a simple AI project step by step!",
      topics: ["Python Basics", "Simple Models", "Hands-on Project"],
      link: "https://nexageapps.github.io/ai-lessons/lesson-4-first-ai-project"
    },
    {
      id: 5,
      title: "AI Ethics & Responsibility 🌍",
      level: "Intermediate",
      duration: "8 min read",
      description: "Learn about the important questions: How should AI be used? What are the risks?",
      topics: ["Bias", "Privacy", "Responsible AI"],
      link: "https://nexageapps.github.io/ai-lessons/lesson-5-ai-ethics"
    },
    {
      id: 6,
      title: "The Future of AI 🚀",
      level: "Advanced",
      duration: "12 min read",
      description: "Peek into tomorrow! Explore cutting-edge AI research and what's coming next.",
      topics: ["AGI", "Quantum AI", "Future Trends"],
      link: "https://nexageapps.github.io/ai-lessons/lesson-6-future-of-ai"
    }
  ];

  return (
    <div className="learn-ai-page">
      <div className="learn-container">
        <div className="learn-header">
          <h1>Learn AI 🎓</h1>
          <p className="learn-subtitle">Free AI Lessons for Beginners</p>
          <p className="learn-description">
            Start your journey into artificial intelligence! Our bite-sized lessons make AI easy 
            to understand, even if you've never coded before. Learn at your own pace, have fun, 
            and discover how AI is shaping our future! 🌟
          </p>
        </div>

        <div className="lessons-grid">
          {lessons.map((lesson) => (
            <a 
              key={lesson.id}
              href={lesson.link}
              target="_blank"
              rel="noopener noreferrer"
              className="lesson-card"
            >
              <div className="lesson-header">
                <span className={`lesson-level ${lesson.level.toLowerCase()}`}>
                  {lesson.level}
                </span>
                <span className="lesson-duration">{lesson.duration}</span>
              </div>
              
              <h3 className="lesson-title">{lesson.title}</h3>
              <p className="lesson-description">{lesson.description}</p>
              
              <div className="lesson-topics">
                {lesson.topics.map((topic, index) => (
                  <span key={index} className="topic-tag">{topic}</span>
                ))}
              </div>
              
              <div className="lesson-cta">
                Start Learning →
              </div>
            </a>
          ))}
        </div>

        <div className="learn-footer">
          <div className="footer-card">
            <h3>🎯 Why Learn AI?</h3>
            <p>
              AI is everywhere—from your phone to self-driving cars. Understanding AI helps you 
              make better decisions, opens career opportunities, and lets you be part of shaping 
              the future!
            </p>
          </div>
          
          <div className="footer-card">
            <h3>💡 No Experience Needed</h3>
            <p>
              Our lessons are designed for complete beginners. We explain everything in simple 
              terms with real-world examples. If you can use a smartphone, you can learn AI!
            </p>
          </div>
          
          <div className="footer-card">
            <h3>🚀 Learn by Doing</h3>
            <p>
              Theory is great, but practice is better! Our lessons include interactive examples 
              and simple projects you can try yourself. Learning AI should be fun!
            </p>
          </div>
        </div>

        <div className="back-home">
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}

export default LearnAI;
