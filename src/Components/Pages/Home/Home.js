import React from "react";

import Slider from "../../Slider/Slider";

import MiddleBanner from "../../Middlebanner/Middlebanner";
import CourseContent from "../../Course/Course";
import Flip from "../../Flip/Flip";
import KnownUs from "../../Known/Exitknown";


const Home = () => {
    return (

        <>

            <Slider />
            <KnownUs />
            <MiddleBanner />
            <CourseContent />
            <Flip />


        </>
    )

}
export default Home;