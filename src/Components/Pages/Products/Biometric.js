import React from "react";
import "./Biometric.css";
import biohrm from "../Products/img/bio3.jpg";
import Hrm from "../Products/img/biom1.jpg";
import bio_metric from "../Products/img/bio2.jpeg";
const BiometricPage = () => {
  return (
    <>
      <div className="carrear_image">
        <div className="carrear_img">
          <img src={biohrm} width="100%" alt="Biometric_hrm" className="sli_img1" />
          {/* <img src="images/biom2.jpg" width="100%" alt="Biometric_hrm" class="sli_img2" /> */}
        </div>
      </div>

      <div className="content_lists">

        <div className="product_cont">
          <div className="career_p">
            <h1 className="product_title">Biometric Based HRM (Human Resource Management)</h1>
            <p className="cont_para_style">Biometrics technology is used to register, verify, and authenticate a person based on his
              or her physical characteristics, which are unique to each individual. Innovative biometrics-based devices provide a
              secure solution that cannot be stolen, lost, or forgotten, making biometrics crucial in human resource management.
            </p>
            {/* <h2 class="title2">Transparency</h2> */}
            <p className="cont_para_style">
              Voice patterns, hand measurements, and iris patterns are just a few of the characteristics that biometric
              technologies can analyse and measure. These characteristics are then compared to the stored characteristics
              of the individual attempting to gain access to a building or network; this system enables accurate identification
              of an individual's identity down to the smallest detail. This type of technology enables accurate identification
              of employees, thereby preventing workplace fraud and theft.</p>
            {/* <h2 class="title2"> Saves Time</h2> */}
            <p className="cont_para_style"> Various organisations and businesses are expanding globally, breaking down geographical
              barriers. To overcome the challenges faced by HR professionals, such organisations, enterprises, or businesses must
              be aware of the issues encountered in monitoring personnel activities on the premises. Human resource professionals'
              roles in the modern workplace include reshaping organisational values, achieving staff member satisfaction, and
              scaling the success of transformations.</p>
            <div className="img_pro">
              <img src={Hrm} width="100%" height="100%" alt="Hrm Management" />
            </div>
            <h2 className="title2">What Should You Look for in a Human Resource Management System?</h2>
            <p className="cont_para_style">
              <ul>

                <li><b>Customization -</b>The HR system must be able to grow and change alongside your business.</li>
                <li><b>Employee engagement tools - </b>The software chosen should fully engage employees, gauge employee satisfaction, and promote a positive company culture.</li>
                <li><b>Time tracking and payroll - </b>To make payroll easier, the software used must be capable of tracking and logging employee hours.</li>
                <li><b>Reporting and analytics - </b>Real-time analytics are critical for making business decisions.</li>
                <li><b>Third-party integrations - </b>The HR management system you select must integrate seamlessly with the rest of your company's software.</li>
                <li><b>Ease of use - </b>The HR system you select should be simple to use for both management and employees.</li>
                <li><b>Price - </b>The software must be reasonably priced and include all the features required to run your business efficiently.</li>
              </ul>
            </p>
            {/* <h2 class="title2"> Increased Efficiency for Employee Maintenance</h2> */}
            <p className="cont_para_style">Kitkat Software Technologies Biometric HR Software that uses a biometrics system provides a real-time solution to HR managers
              or professionals, supplementing traditional HR analytics practices. By offering various human resource management solutions, the system streamlines multiple
              HR department tasks. It assists HR managers in maintaining a transparent employee attendance system, limiting buddy-punching, saving HR time, and enriching
              employee punctuality in order to run the HR management process in a systematic manner.</p>
            <div className="img_pro">
              <img src={bio_metric} width="100%" height="100%" alt="Bio-metric" />
            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default BiometricPage;