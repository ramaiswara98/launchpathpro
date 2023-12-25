import axios from "axios";
import { Prompt } from "../../utils/Prompt";
import { Secret } from "../../utils/Secret";

const generateAIOpinion = (data) => {
    return new Promise((resolve, reject) => {
        const {businessName, businessIdea,prompt} = data;
    const newPrompt = prompt
    +"\nbusiness name: "+businessName+"\nbusiness idea: "+businessIdea;

    const headers = {
        headers:{
            'Authorization':'Bearer '+Secret.OPENAI_API,
            'Content-Type':'application/json'
        }
    }

    const body = {
        model: "gpt-3.5-turbo",
        messages:[
            {
                role:"user",
                content:newPrompt
            }
        ]
    }
    console.log(body)

    axios.post("https://api.openai.com/v1/chat/completions",body,headers)
    .then((result) => {
        const opinion = result.data.choices[0].message.content;
        resolve(opinion)
    })
    .catch((err) => {
        console.log(err)
        reject(null)
    })
    })
    
}

export {generateAIOpinion}