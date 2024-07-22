import { Introduction } from "./Introduction";
import { MessageSection } from "./MessageSection";
import { ObjGoalSection } from "./ObjGoalSection";
import TopSection from "./TopSection";
import { WhyJec } from "./WhyJec";

function AboutUsPage(){
    return(
        <>
        <TopSection/>
        <Introduction/>
        <ObjGoalSection/>
        <MessageSection/>
        <WhyJec/>
        </>
    )
}
export default AboutUsPage