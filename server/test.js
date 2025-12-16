import OpenAI from "openai";
const client = new OpenAI({ apiKey: "AIzaSyBAnRKhoNo3PTvRVWMfSeEgrxopC80Sb3M" });

(async () => {
  const resp = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: "Hello" }],
  });
  console.log(resp);
})();
