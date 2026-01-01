import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true, // Required for client-side usage
});

export const analyzeCode = async (codeInput) => {
  try {
    const prompt = `You are an expert code security auditor and penetration testing specialist. Analyze the following code for:

1. Security vulnerabilities (SQL injection, XSS, CSRF, authentication issues, etc.)
2. Code quality issues and bugs
3. Performance problems
4. Best practice violations
5. Potential penetration testing vulnerabilities

Provide a detailed security audit with:
- Overall security score (0-100)
- Critical issues (severity: critical)
- High priority issues (severity: high)
- Medium priority issues (severity: medium)
- Low priority issues (severity: low)
- Recommendations for each issue

Code to analyze:
\`\`\`
${codeInput}
\`\`\`

Respond in JSON format:
{
  "securityScore": number (0-100),
  "overallAssessment": string (detailed paragraph explaining the overall security posture),
  "issues": [
    {
      "severity": "critical" | "high" | "medium" | "low",
      "title": string (concise issue title),
      "description": string (detailed explanation of the issue),
      "lineNumbers": [array of line numbers where issue appears],
      "recommendation": string (specific fix recommendation),
      "cweId": string (CWE ID if applicable, e.g., "CWE-89")
    }
  ],
  "summary": {
    "critical": number (count of critical issues),
    "high": number (count of high issues),
    "medium": number (count of medium issues),
    "low": number (count of low issues)
  }
}`;

    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
      response_format: { type: "json_object" },
    });

    const content = response.choices[0].message.content;
    const result = JSON.parse(content);

    // Validate response structure
    if (!result.securityScore || !result.issues || !result.summary) {
      throw new Error("Invalid response format from AI");
    }

    return result;
  } catch (error) {
    console.error("Error analyzing code:", error);

    // Handle specific error cases
    if (error.message.includes("API key")) {
      throw new Error("API key not configured. Please add your Groq API key to the .env file.");
    }

    if (error.message.includes("network") || error.message.includes("fetch")) {
      throw new Error("Network error. Please check your internet connection and try again.");
    }

    if (error.message.includes("rate limit")) {
      throw new Error("Rate limit exceeded. Please try again in a few moments.");
    }

    throw new Error("Failed to analyze code. Please try again later.");
  }
};

export default { analyzeCode };
