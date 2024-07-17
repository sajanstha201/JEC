import { Introduction } from "./Introduction";
import { MessageSection } from "./MessageSection";
import { ObjGoalSection } from "./ObjGoalSection";
import TopSection from "./TopSection";

function AboutUsPage(){
    return(
        <>
        <TopSection/>
        <Introduction/>
        <ObjGoalSection/>
        <MessageSection/>
        </>
    )
}
export default AboutUsPage