
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully,
  // but for this context, throwing an error is clear.
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const getAiInsight = async (dataContext: object, question: string): Promise<string> => {
  if (!API_KEY) {
    return "API key is not configured. Please set the API_KEY environment variable.";
  }

  const model = "gemini-2.5-flash";

  const prompt = `
    You are an expert digital marketing analyst for 'ADmyBRAND Insights'.
    Analyze the following JSON data and answer the user's question.
    Provide a concise, insightful, and easy-to-understand answer.
    If the data doesn't support the question, state that clearly.
    Do not just repeat the data; provide an interpretation or summary.

    Data:
    ${JSON.stringify(dataContext, null, 2)}

    User's Question:
    "${question}"
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching AI insight:", error);
    if (error instanceof Error) {
        return `An error occurred while fetching insights: ${error.message}`;
    }
    return "An unknown error occurred while fetching insights.";
  }
};
