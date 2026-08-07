import { createContext, useContext, useState } from "react";

const Language = createContext()
const SetLanguage = createContext()

export const LanguageContextProvider = ({children})=>{
    const [language, setLanguage] = useState("eng")
    return(
        <Language value={language}>
            <SetLanguage value={setLanguage}>
                {children}
            </SetLanguage>
        </Language>
    )
}

export const useLanguage = ()=>{
    return useContext(Language)
}
export const useSetLanguage = ()=>{
    return useContext(SetLanguage)
}