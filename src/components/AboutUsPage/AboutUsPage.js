import { Introduction } from "./Introduction";
import { MessageSection } from "./MessageSection";
import { ObjGoalSection } from "./ObjGoalSection";
import TopSection from "./TopSection";
import Chatbot from "../Bot/Chatbot";

function AboutUsPage(){
    return(
        <>
        <TopSection/>
        <Introduction/>
        <Chatbot/>   
        <ObjGoalSection/>
        <MessageSection/>
        </>
    )
}
export default AboutUsPage