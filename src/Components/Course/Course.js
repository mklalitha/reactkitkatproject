import React from "react";
import "./Course.css";
import php from "../courseimage/php.png";
import python from "../courseimage/python.jpg";
import java from "../courseimage/java-logo-1.png";
import pwa from "../courseimage/pwa.png";

import javascript from "../courseimage/javascript.png";
import jquery from "../courseimage/jquery.png";


import yii from "../courseimage/yii-logo-.png"
import codeigniter from "../courseimage/codeigniter.jpg";
import laravel from "../courseimage/laravel.png";
import drupal from "../courseimage/drupal.png";
import django from "../courseimage/django.png";

import Angular from "../courseimage/Angular.png";
import nodejs from "../courseimage/nodejs.jpg";
import react from "../courseimage/react.png";
import Spring from "../courseimage/Spring.png";

import Mysql from "../courseimage/mysql.png";
import SQLite from "../courseimage/SQLite.png";
import PostgreSQL from "../courseimage/PostgreSQL.png";
import MangoDB from "../courseimage/MangoDB.png";

import Androidapp from "../courseimage/Android_app.png";
import ios_application from "../courseimage/ios_application.png";
import React_native from "../courseimage/React_native.png";
import IO from "../courseimage/IO.png";


import FL from "../courseimage/FL.png";
import XA from "../courseimage/XA.png";


const CourseContent = () => {
  return (
    <>
      <div className="software_tools" style={{ width: "90%", margin: "0 auto", height: "auto", padding: "20px" }}>
        <h2 className="t1">Programming</h2>
        <div className="tools_1" >
          <div className="res_tools">
            <img src={react} className="img_logo" alt="React" />
            <img src={java} className="img_logo" alt="Java" />
            <img src={php} className="img_logo" alt="Php" />
            <img src={python} className="img_logo" alt="Python" />
           
           
            
          </div>
          <div className="res_tools">
           <img src={pwa} className="img_logo" alt="Progressive Web App" />  
            <img src={javascript} className="img_logo" alt="Javascript" />
            <img src={jquery} className="img_logo" alt="Jquery" />
          </div>
        </div>
        <h2 className="t1">Software Tools</h2>
        <div className="tools_1" >
          <div className="res_tools">
            <img src={laravel} className="img_logo" alt="Laravel" /> 
            <img src={yii} className="img_logo" alt="yii" />
            <img src={codeigniter} className="img_logo" alt="Codeigniter" />
            <img src={drupal} className="img_logo" alt="Drupal" />
           
          </div>
          <div className="res_tools">
            <img src={django} className="img_logo" alt="Django" />
            <img src={Angular} className="img_logo" alt="Angular" />
            <img src={nodejs} className="img_logo" alt="NodeJs" />
             <img src={Spring} className="img_logo" alt="Spring" />
          </div>
        </div>
        <h2 className="t1">Database</h2>
        <div className="tools_1" >
          <div className="res_tools">
            <img src={Mysql} className="img_logo" alt="MySql Server" />
            <img src={SQLite} className="img_logo" alt="SQLite" />
            <img src={PostgreSQL} className="img_logo" alt="PostgreSQL" />
            <img src={MangoDB} className="img_logo" alt="MangoDB" />

          </div>
        </div>
        <h2 className="t1">Mobile Application Tools</h2>
        <div className="tools_1" >
          <div className="res_tools">
            <img src={Androidapp} className="img_logo" alt="Android Apps" />
            <img src={ios_application} className="img_logo" alt="IOS Application" />
            <img src={React_native} className="img_logo" alt="React Native" />
            <img src={IO} className="img_logo" alt="Insertion Order" />

          </div>
          <div className="res_tools">
            <img src={FL} className="img_logo" alt="Function Level" />
            <img src={XA} className="img_logo" alt="Extended Architecture" />
          </div>
        </div>
      </div>


    </>
  )
}
export default CourseContent;