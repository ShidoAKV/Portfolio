
import { GoogleGenAI } from "@google/genai";

const AssistanceResponse = async (req, res) => {
  try {
    
    const { prompt } = req.body;
    const rawText = prompt?.trim();
    
    if (!rawText || typeof rawText !== 'string') {
      return res.json({
        success: false,
        message: 'Please send your query as text.',
      });
    }
    const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});
   
    const generalPrompt = `
      You are a friendly and engaging AI assistant.
      Respond conversationally to the user's message below:

      "${rawText}"

      Keep your tone polite, natural, and human-like.
      Avoid medical advice or complex topics.
      Keep responses concise and friendly.
      **Return only the message as plain text.**
    `;

   const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:[generalPrompt] ,
  });
  
   const generalReply=response.text;

    return res.json({
      success: true,
      message: generalReply?.trim() || 'Hello! How can I assist you today?',
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message || 'Something went wrong.',
    });
  }
};


export {AssistanceResponse};