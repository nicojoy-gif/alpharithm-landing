import { CustomButton } from "../Customs";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center text-white mx-auto py-16 px-6 w-full md:w-3/4 lg:w-1/2">
      <p className="text-lightblue font-bold text-lg md:text-xl lg:text-2xl leading-snug tracking-tight">
        Leverage on Automation
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-7xl px-4 md:px-8 lg:px-1 leading-tight md:leading-[60px] lg:leading-[82px] tracking-tight font-semibold">
        AI Models for Business Solutions
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed tracking-tight py-6">
        Leverage the power of AI to automate, analyze, and optimize your workflows. 
        Our specialized models are designed to fit different business needs.
      </p>
      <CustomButton className="rounded-xl py-3 px-8 md:px-10 text-dark-200 text-sm md:text-base">
        Get Started Now
      </CustomButton>
    </section>
  );
};
