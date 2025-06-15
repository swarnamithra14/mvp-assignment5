import { useState } from "react";

export default function Chat() {
  const [userMessage, setUserMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!userMessage.trim()) return;

    setLoading(true);
    setAiResponse("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      setAiResponse(data.reply || "Sorry, I couldn’t find an answer.");
    } catch (error) {
      setAiResponse("Error contacting AI. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white p-8 font-sans">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
        🌾 Ask Mitti Mithra AI
      </h1>

      <div className="max-w-3xl mx-auto text-center mb-10">
        <input
          type="text"
          placeholder="Ask about papaya, banana, farming tips..."
          className="w-full px-4 py-3 rounded-md border border-green-400 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button
          onClick={handleAsk}
          className="mt-4 px-6 py-2 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-all"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {aiResponse && (
          <div className="mt-6 bg-green-50 p-4 rounded-md border border-green-200 text-left">
            <strong className="text-green-800">AI Response:</strong>
            <p className="text-gray-800 mt-1">{aiResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
}
