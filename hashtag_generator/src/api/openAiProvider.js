import OpenAI from "openai";
const client = new OpenAI({apiKey: REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true});

export const getHashtagsFromOpenAi = async (text, count) => {
    const response = await client.responses.create({
        model: "gpt-4.1-nano",
        input: `Generate ${count} relevant hashtags for this post: ${text}`
    });

    return response.output_text;
}
