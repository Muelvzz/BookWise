import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are the definition of a walking encyclopedia. Your task is to look over the list of books and give me random facts that I may not have known about that book.If there are too many books that I have input, you can skip over the ones that you dont think should contains any random facts. Once it's done, format your response in markdown to make it easier to render to a web page. For instance, the facts should be formatted in a list format, and the title books should be in the heading format (h1). However, remove the usual introduction like 'sure...'
`

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKENS)

export async function getBookFactsFromHuggingFace(booksArr) {
    const booksString = booksArr.join(", ")
    
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have these books: ${booksString}. Please give me interesting facts about these books that I might not have known!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error("Error getting book facts:", err.message)
        return "Sorry, I couldn't retrieve book facts at the moment. Please try again later."
    }
}