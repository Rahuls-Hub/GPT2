// const {Configuration,OpenAIApi}=require('openai');
// const configuration=new Configuration({apiKey:"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"})
// const openai = new OpenAIApi(configuration);
 
// export async function sendMsgToOpenAI(message)
// {
//     const res=await openai.createCompletion({
//         model:'text-davinci-003',
//         prompt:message, 
//         temperature:0.7,
//         max_tokens:256,
//         top_p:1,
//         frequency_penalty:0,
//         presense_penalty:0
//     });
//     return res.data.choices[0].text;
// }



// import { OpenAI } from 'openai';

// const openai = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true });

// export async function sendMsgToOpenAI(message) {
//     const res = await openai.completions.create({
//         model: 'gpt-3.5-turbo', 
//         prompt: message,
//         max_tokens: 256,
//         temperature: 0.7,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0
//     });
//     return res.data.choices[0].text;
// }

// openai.js

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

export default openai;