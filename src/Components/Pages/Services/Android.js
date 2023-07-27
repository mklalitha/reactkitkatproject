import React from "react";
import "./Android.css";
import android_application from "../Services/img/android1.jpg";
import android_development from "../Services/img/android_development.webp";
import Android_apps from "../Services/img/android3.jpg";
const AndroidPage = () => {
    return (
        <>
            <div className="carrear_image">
                <div className="carrear_img">
                    <img src={android_application} width="100%" alt="Android Application" className="sli_img1" />
                    {/* <img src="images/img17.jpg" width="100%"  alt="image" className="sli_img2"> */}
                </div>
            </div>

            <div className="content_lists">
                <div className="product_cont">
                    <div className="career_p">
                        <h1 className="product_title">Android App Development</h1>
                        <p className="cont_para_style">Kitkat software technologies in Coimbatore has a team of  Android developers who provide high
                            performance functionality as well as influential looks for Android app development. When you choose us for Android app
                            development, you will be working with the best industry because we are a dependable and honest Android app development company.</p>
                        <p className="cont_para_style">To create the most competitive Android applications, we employ cutting-edge methods and world-class
                            technologies. We enjoy stepping outside of our comfort zone to develop applications that meet our customers' needs. </p>
                        <div class="img_pro">
                            <img src={android_development} width="100%" height="100%" alt="Android Development" />
                        </div>
                        {/* <p class="cont_para_style">To create the most competitive Android applications, we employ cutting-edge methods and 
           world-class technologies. We enjoy stepping outside of our comfort zone to develop applications that meet our customers' needs.</p> */}
                        <p className="cont_para_style">We can assist you in developing an Android app from the ground up or upgrading an existing one.
                            We are a talented and skilled Android app development company that provides excellent applications to customers. We stay
                            current on market and industry trends. Android applications that are customer-focused, simple to use, and technologically advanced.
                            We specialise in Android application development and have created high-quality Android applications for clients all over the world.
                            We guarantee that you will receive error-free and high-quality Android apps that meet and exceed your expectations.</p>
                        <p className="cont_para_style"><b>-APIs and cloud services:</b>The Android platform includes a wide range of APIs that can help you connect
                            to the cloud and overcome the limitations of mobile devices, which typically have less memory and processing power than other platforms.
                            Android has a large support community because it is an open-source operating system.</p>

                        <p className="cont_para_style"> <b> -Android mobile app security:</b>An automated system can send users notifications on a regular basis to keep them up to date on all developments.
                            Aside from that, one of the other benefits of Android application development is the ease with which your Android app can be promoted due to the
                            popularity of the platform. As a result, the Android operating system can offer you promotional as well as security benefits. </p>

                        <p className="cont_para_style"> <b>-Variants for different devices:</b>Android provides a lot of creative freedom for developing apps that take advantage of new technologies.
                            Android is primarily intended for touchscreen mobile devices like smartphones and tablets. If your company is in the automotive industry,
                            you could create a car dashboard app that allows users to play music from Android devices, navigate using Google Maps, and search for answers
                            using Google Search.</p>
                        <div className="img_pro">
                            <img src={Android_apps} width="100%" height="100%" alt="Android Apps" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )

}
export default AndroidPage;
