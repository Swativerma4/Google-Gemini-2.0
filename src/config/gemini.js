/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyAEHfF1qMd7Mq8zZUF31bYsproGfXHaTl8"; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [], // Ensure history is properly formatted
    });

    // Test different formats for sendMessage
    const result = await chatSession.sendMessage({
      messages: [{ content: prompt }] // Ensure the format matches the library's expectations
    });

    console.log(result.response.text());
  } catch (error) {
    console.error("Error in sendMessage:", error);
  }
}

export default run;
