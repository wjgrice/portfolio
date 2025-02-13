import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Card from './Card';
import { FaSpinner } from 'react-icons/fa'; // For the loading spinner
import './ChatbotCard.css'; // Import your custom CSS

const ChatbotCard = () => {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);
  const [audioLoading, setAudioLoading] = useState(false);

  // Function to handle chat submission and fetch text reply
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setLoading(true);
    setReply('');
    setAudioSrc(null);
    setAudioLoading(false);
    try {
      const response = await fetch(
        'https://gptassist-fastapi-env.eba-62mwwktp.us-east-1.elasticbeanstalk.com/api/chat/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          mode: 'cors',
          body: JSON.stringify({ message }),
        }
      );
      const data = await response.json();
      setReply(data.reply || 'No reply received.');
      // Clear the input box after fetching the reply
      setMessage('');
    } catch (error) {
      console.error('Error fetching reply:', error);
      setReply('Error fetching reply.');
    }
    setLoading(false);
  };

  // Function to load audio from the audio endpoint
  const loadAudio = async () => {
    if (!reply || audioSrc) return;
    setAudioLoading(true);
    try {
      const response = await fetch(
        'https://gptassist-fastapi-env.eba-62mwwktp.us-east-1.elasticbeanstalk.com/api/chat/audio/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          body: JSON.stringify({ text: reply }),
        }
      );
      const data = await response.json();
      if (data.audio) {
        const audioUrl = "data:audio/mp3;base64," + data.audio;
        setAudioSrc(audioUrl);
      }
    } catch (error) {
      console.error('Error loading audio:', error);
    }
    setAudioLoading(false);
  };

  // Automatically load audio when a new reply is received
  useEffect(() => {
    if (reply && !audioSrc) {
      loadAudio();
    }
  }, [reply]);

  return (
    <Card className="chatbot-card p-4 relative">
      {/* Header with title on the left and audio player or spinner on the right */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Resume Assistant</h2>
        <div className="audio-header">
          {audioLoading && (
            <FaSpinner className="animate-spin text-green-500 mr-2" />
          )}
          {audioSrc && (
            <div
              className="audio-player transition-opacity duration-500"
              style={{ opacity: audioSrc ? 1 : 0 }}
            >
              <audio controls src={audioSrc} className="audio-small">
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
      </div>

      {/* Form for submitting the chat question */}
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

      {/* Render the reply with markdown styling */}
      {reply && (
        <div className="reply mt-4 chatbot-markdown">
          <ReactMarkdown>{reply}</ReactMarkdown>
        </div>
      )}
    </Card>
  );
};

export default ChatbotCard;
