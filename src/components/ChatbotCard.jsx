import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Card from './Card';
import { FaSpinner } from 'react-icons/fa';
import './ChatbotCard.css';

// Sample prompts array
const samplePrompts = [
  { id: 1, label: 'Summarize Jeremy', prompt: 'Summarize Jeremy.' },
  { id: 2, label: 'What’s something funny about him?', prompt: 'What’s something funny about Jeremy?' },
  { id: 3, label: 'Highlight his skills', prompt: 'What are Jeremy’s key skills?' },
  { id: 4, label: 'What are his strengths?', prompt: 'What are Jeremy’s greatest strengths?' },
];

const ChatbotCard = () => {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);
  const [audioLoading, setAudioLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await fetchReply(message);
  };

  const fetchReply = async (query) => {
    setLoading(true);
    setReply('');
    setAudioSrc(null);
    setAudioLoading(false);

    try {
      const response = await fetch(
        'https://resumebot.jeremygrice.info/api/chat/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          mode: 'cors',
          body: JSON.stringify({ message: query }),
        }
      );
      const data = await response.json();
      setReply(data.reply || 'No reply received.');
      setMessage('');
    } catch (error) {
      console.error('Error fetching reply:', error);
      setReply('Error fetching reply.');
    }
    setLoading(false);
  };

  const loadAudio = async () => {
    if (!reply || audioSrc) return;
    setAudioLoading(true);
    try {
      const response = await fetch(
        'https://resumebot.jeremygrice.info/api/chat/audio/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          mode: 'cors',
          body: JSON.stringify({ text: reply }),
        }
      );
      const data = await response.json();
      if (data.audio) {
        const audioUrl = 'data:audio/mp3;base64,' + data.audio;
        setAudioSrc(audioUrl);
      }
    } catch (error) {
      console.error('Error loading audio:', error);
    }
    setAudioLoading(false);
  };

  useEffect(() => {
    if (reply && !audioSrc) {
      loadAudio();
    }
  }, [reply]);

  const handleSamplePrompt = (prompt) => {
    setMessage(prompt);
    fetchReply(prompt);
  };

  return (
    <Card className="chatbot-card p-4 relative">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Resume Assistant</h2>
        <div className="audio-header">
          {audioLoading && <FaSpinner className="animate-spin text-green-500 mr-2" />}
          {audioSrc && (
            <div className="audio-player transition-opacity duration-500" style={{ opacity: audioSrc ? 1 : 0 }}>
              <audio controls src={audioSrc} className="audio-small">
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
      </div>

      {/* Sample prompt buttons generated from JSON */}
      <div className="flex flex-wrap gap-2 mt-4">
        {samplePrompts.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSamplePrompt(item.prompt)}
            className="border border-gray-300 rounded-full px-3 py-1 text-sm bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {item.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          placeholder="Type your question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border rounded p-2 dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </form>

      {reply && (
        <div className="reply mt-4 chatbot-markdown">
          <ReactMarkdown>{reply}</ReactMarkdown>
        </div>
      )}
    </Card>
  );
};

export default ChatbotCard;
