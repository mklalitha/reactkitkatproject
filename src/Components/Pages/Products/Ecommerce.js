import React from "react";
import "./Ecommerce.css";
import ecommerce from "../Products/img/ecom1.jpg";
import Ecommerce_website from "../Products/img/ecom2.jpg";
import Ecommerce from "../Products/img/ecom3.jpg";



const EcommercePage = () => {
	return (
		<>
			<div className="carrear_image">
				<div className="carrear_img">
					<img src={ecommerce} width="100%" alt="E-commerce" className="sli_img1" />
					{/* <!-- <img src="images/ecom2.jpg" width="100%"  class="sli_img2">   --> */}
				</div>
			</div>
             
			<div className="product_cont">
          <div className="career_p">
            {/* <h1 className="product_title">E-COMMERCE</h1> */}
            <p className="cont_para_style">An effective e-commerce website displays each of your products separately. It facilitates global
							sales of your products. Our team is dedicated to assisting organizations in achieving their business objectives
							through beautiful website design and internet marketing strategies. Our website designers recognize the nature of
							your company and apply their knowledge to create a professional and successful website. All of our websites are
							mobile-responsive and cross-browser compatible. Our work is completely professional and delivers results-driven insights,
							resulting in increased conversions and website traffic for your company.
            </p>
			<div className="img_pro">
            <img src={Ecommerce_website} width="100%" height="100%" className="img1" alt="Ecommerce-website" />
            </div>
         <p className="cont_para_style">
			Begin your online selling with the most personalized and customized e-commerce website.
							Kitkat Software Technologies has worked for clients from various businesses and industries all over the globe. As the
							best e-commerce web designers in Coimbatore, we don't just make websites. Our work begins with identifying your business's
							nature, promotional activities, competitors, and business goals, all of which are required for developing a successful
							e-commerce website.</p>
							<div className="img_pro">
							<img src={Ecommerce} width="100%" height="100%"  alt="Digital Marketing" className="img1" />
            </div>
      
			</div>
			</div>
               <div className="key">
					<strong>Why E-Commerce is important?</strong>
					<ul style={{ fontSize: "18px", lineHeight: "24px" }}>
						<li>So, what exactly is the significance of E-Commerce? Because it is a rapidly expanding consumer outlet that shows no signs of slowing down.</li>
						<li><b>Cost-Effective :</b>A physical product store necessitates significant additional costs for management and operation.
							As a result, an E-Commerce site is the answer to every problem. It is a more cost-effective method of selling retail products.</li>
						<li>An E-Commerce business model differs from others in that it provides you with easy access, such as</li>
						<li>	You will save a lot of money on advertising.</li>
						<li>	Save money on real estate and location upkeep.</li>
						<li>	Save your time whenever possible so that you can focus on product development and customer satisfaction.</li>
						<li>	Less manpower is required to maintain</li>
						<li>	Reduced business operating expenses</li>
						<li><dfn>Gain a Competitive Advantage:</dfn>If you sell consumer goods in a physical store and want to increase sales and revenue,
							you can convert your physical store into a virtual one. It will assist you in maintaining positive business growth and
							outranking your competitors. As a result, you can reach your target audience and grow your business while keeping the
							needs and desires of your customers in mind.</li>
						<li><b>Increase Your Exposure:</b>Reaching out to your customers is what is meant by outreach. With the growing number
							of internet users, millions of people can now visit your website at any time and from any location. Eventually, the prospect
							of expanding the business grew. You now have complete control over getting your products to more people. More leads and, eventually,
							more new customers are the result of effective outreach.</li>
						<li>Additionally, you can attract more new customers by utilising:</li>
						<li>The outcomes of a search engine</li>
						<li>Social exchange</li>
					</ul>
				</div>
		
		</>
	)
}

export default EcommercePage;