import OpenAI from "openai";

let openai = new OpenAI({
    apiKey:process.env.OPENAI_API
})
export default openai;