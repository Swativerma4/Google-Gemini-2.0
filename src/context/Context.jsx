import { createContext, useState } from "react";
import runChat from "../config/gemini"
export const Context =createContext();

const ContextProvider=(props)=>{
    const [input,setInput]=useState("")
    const [recentPrompt,setRecentPrompt]=useState("");
    const [PrevPrompt,setPrevPrompt]=useState([]);
    const [showResult,setShowResult]=useState(false);
    const [loading,setLoading]=useState(false);
    const [resultData,setResultData] =useState("");

    const onSent = async(prompt)=>{
        await runChat(prompt)
    }
     
    const contextValue={
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        PrevPrompt,
        setPrevPrompt,
        showResult,
        setResultData,
        setShowResult,
        loading,
        setLoading,
        resultData,
        onSent
       

    }
    return(
        <Context.Provider value={contextValue}>
        {props.children}
        </Context.Provider>
    )
}
export default ContextProvider
