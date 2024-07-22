import scholarshipscheme from '../../media/images/whyjecimage/jec1.jpg';
import internship from '../../media/images/whyjecimage/jec2.jpg';
import primelocation from '../../media/images/whyjecimage/jec3.jpg';

const textStyle = {
    textShadow: `
      -1px -1px 0 #Ff0000,
      1px -1px 0 #Ff0000,
      -1px 1px 0 #Ff0000,
      1px 1px 0 #Ff0000`,
  };

export const WhyJec=()=>{
    return(
        <div className="px-10 py-4 w-4/5 mx-auto text-lg">
      <div>
        <h1 className="text-4xl text-white font-bold" style={textStyle}>WHY CHOOSE JEC?</h1>
        <p className="w-full">
          Our college offers three undergraduate programs in Civil Engineering, Computer Engineering, and
          Electronics and Information Engineering, providing students with a well-rounded education in these
          important fields.
        </p>
      </div>
      <div className="services-offered w-[94%] mx-auto flex justify-between md:flex-row flex-col gap-5 mt-8">
        <div>
          <img src={scholarshipscheme} alt="Scholarship scheme" />
          <p>Scholarship scheme</p>
        </div>
        <div className="md:mt-24">
          <img src={internship} alt="Internship opportunity" />
          <p>Internship opportunity</p>
        </div>
        <div className="md:mt-36">
          <img src={primelocation} alt="Prime Location" />
          <p>Prime Location</p>
        </div>
      </div>
    </div>
    )
}