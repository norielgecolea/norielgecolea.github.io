import { useEffect, useState } from "react";
import Verticalcard from "../verticalcard";

export default function Allprojects() {


    return (
        <div className="background font-sans  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 overflow-hidden grid grid-col-1 lg:grid-cols-3 sm:grid-cols-2 ">


            <Verticalcard
                image="/projects/POS.png"
                title="Simple Point of Sales System (POS)"
                body="The Simple Point of Sales (POS) System is an intuitive and efficient application designed for managing retail transactions. Developed using VB.NET and MySQL, this software offers a user-friendly interface for processing sales, tracking inventory, and generating reports. Ideal for small to medium-sized businesses."
                tags={['VB.net', 'MySQL']}
            />

            <Verticalcard
                image="/projects/quicktrack.webp"
                title="QuickTrack: Smart QR Attendance System"
                body="QuickTrack is a C#.NET and MySQL-based attendance management system that uses QR codes for fast, accurate attendance tracking. It simplifies the attendance process with real-time data syncing and easy-to-use interfaces, making manual tracking obsolete."
                tags={['C#.net', 'MySQL']}
            />

            <Verticalcard
                image="/projects/LSPU.webp"
                title="LSPU: Training Request Portal"
                body="The LSPU Training Request Portal is a web-based platform that streamlines the process for schools to request access to LSPU Los Banos’ facilities for training sessions. Through the portal, users can easily submit requests, track their status, and manage their bookings. This intuitive system enhances efficiency and transparency."
                tags={['HTML', 'CSS', 'JS', 'PHP', 'MySQL']}
            />

            <Verticalcard
                image="/projects/LSPU2.webp"
                title="LSPU: Inventory Management System"
                body="This Inventory Management System is a comprehensive solution built with HTML, CSS, JavaScript, PHP, and MySQL. It tracks inventory details, including product worth, and identifies whether items are donated or purchased. Designed for internal use at LSPU Sta Cruz, it ensures efficient inventory tracking and management."
                tags={['HTML', 'CSS', 'JS', 'PHP', 'MySQL']}
            />

            <Verticalcard
                image="/projects/cashiering.webp"
                title="Cashiering System Project"
                body="Jerlibee's cashiering system is designed for efficiency and user-friendliness, featuring an intuitive interface for seamless ordering. The system highlights the brand's fresh and juicy chicken meals, paired with mouth-watering sides. Customers can easily navigate through the menu, view their cart, and complete orders smoothly."
                tags={['HTML', 'CSS', 'JS', 'Node.js', 'MySQL']}
            />

            <Verticalcard
                image="/projects/tictactoe.webp"
                title="TicTacToe Game"
                body="C#.NET-based Tic-Tac-Toe game that integrates with a MySQL database to track and display high scores. This engaging game offers players a fun experience while maintaining a competitive edge with a real-time high score leaderboard."
                tags={['C#.net', 'MySQL']}
            />

            <Verticalcard
                image="/projects/textsnip.jpg"
                title="Textract"
                body="Textract is a web-based application that allows users to upload images and instantly extract text using Optical Character Recognition (OCR). It offers a fast, intuitive solution for converting screenshots, scanned documents, and photos into editable text."
                tags={['ReactJs']}
            />

            <Verticalcard
                image="/projects/INVENTRACK.jpg"
                title="Inventrack"
                body="INVENTRACK is an innovative IoT-based smart shelving system designed to streamline inventory management for businesses. Equipped with weight sensors and item counters, it provides real-time tracking of stock levels and automatically detects low-stock situations."
                tags={['ESP32', 'SQL', 'HTML', 'CSS', 'JS']}
            />

            <Verticalcard
                image="/projects/sumobot.webp"
                title="Sumobot"
                body="Sumobot is an autonomous robot designed for competitive sumo matches. Equipped with front-facing sensors to detect and push opponents and infrared sensors to stay within boundaries, it combines strategic movement and robust design for exciting robotics challenges."
                tags={['Arduino', 'C#']}
            />

            <Verticalcard
                image="/projects/smartfan.webp"
                title="IoT Smart Exhaust Fan Control System"
                body="The Smart Exhaust Fan Control System intelligently manages an external fan based on smoke and temperature sensor data. Connected to Firebase, it allows real-time monitoring and manual control via a dedicated web app for enhanced air quality and safety."
                tags={['ESP32', 'C#', 'Firebase', 'HTML', 'CSS', 'JS']}
            />

            <Verticalcard
                image="/projects/ROBOT.webp"
                title="IoT Robot With Arm"
                body="The IoT Robot with Arm is an advanced robotic system with multiple degrees of freedom for precise movements. It uses ultrasonic and infrared sensors for environment interaction and is controllable through an app, ideal for automation and research applications."
                tags={['HTML', 'CSS', 'JS', 'PHP', 'MySQL']}
            />

            <Verticalcard
                image="/projects/watervending.webp"
                title="Coin Base Water Refilling System"
                body="The Coin Base Water Refilling System is an automated water dispenser using Arduino. It validates coins and controls a water pump to dispense water accordingly, ensuring convenience and reliability for self-service refilling stations."
                tags={['Arduino', 'C#']}
            />




        </div>


    );

}