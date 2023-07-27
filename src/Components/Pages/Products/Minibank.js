import React from "react";
import "./Minibank.css";
import minibanking from "../Products/img/mini2.jpg";


const MinibankPage = () => {
    return (
        <>
            <div className="carrear_image">
                <div className="carrear_img">
                    <img src={minibanking} width="100%" height="100%" alt="Minibanking" className="sli_img1"/>
                </div>
            </div>

            <div className="content_lists">

                <div className="banking">
                    <div className="career_p">
                        <h1 className="product_title">Mini banking software</h1>
                        <p className="cont_para_style">With our mini banking system, you'll have complete control over your transactions and other
                            business data. The software is powerful and effective, and many companies have succeeded in
                            their business endeavors by implementing the software. The software caters to all types of
                            businesses—from small enterprises to large corporate houses. This type of software has
                            become increasingly popular, particularly because of its ability to handle a wide range of
                            financial transactions. We have built one of the best mini banking software programs, which
                            offers the highest amount of security. This type of company deals with highly secured financial
                            data.
                            Master entry: Under this module, you will find the following options:
                            Member/Associate - This section provides an option for adding new members or associates as
                            well as removing or deleting a member or associate. You can view all kinds of details about
                            each member or associate in this section.
                            Branch - This section allows a user to create branches for the company where he or she can
                            transfer the funds from one branch to another branch in case there is any need.</p>

                    </div>
                </div>
            </div>

        </>
    )
}

export default MinibankPage;