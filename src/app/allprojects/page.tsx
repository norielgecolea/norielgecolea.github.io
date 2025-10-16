import { useEffect, useState } from "react";
import Verticalcard from "../verticalcard";

export default function Allprojects() {


    return (
        <div className="background font-sans  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 overflow-hidden grid grid-col-1 lg:grid-cols-3 sm:grid-cols-2 ">


            <Verticalcard
                image="/projects/LSPU.jpg"
                title="The Coldest Sunset"
                body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quos labore aspernatur modi, dignissimos, perferendis ipsam vero iusto repudiandae laudantium optio corrupti repellendus enim rerum? Cumque minus repellendus excepturi tempora id quibusdam consequatur et eveniet fuga! Omnis nulla dolorem ipsa ducimus eveniet! Optio ut iure saepe cum autem, voluptatem at."
                tags={['photography', 'travel', 'winter']}
            />

            <Verticalcard
                image="/projects/LSPU.jpg"
                title="The Coldest Sunset"
                body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quos labore aspernatur modi, dignissimos, perferendis ipsam vero iusto repudiandae laudantium optio corrupti repellendus enim rerum? Cumque minus repellendus excepturi tempora id quibusdam consequatur et eveniet fuga! Omnis nulla dolorem ipsa ducimus eveniet! Optio ut iure saepe cum autem, voluptatem at."
                tags={['photography', 'travel', 'winter']}
            />

            <Verticalcard
                image="/projects/LSPU.jpg"
                title="The Coldest Sunset"
                body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quos labore aspernatur modi, dignissimos, perferendis ipsam vero iusto repudiandae laudantium optio corrupti repellendus enim rerum? Cumque minus repellendus excepturi tempora id quibusdam consequatur et eveniet fuga! Omnis nulla dolorem ipsa ducimus eveniet! Optio ut iure saepe cum autem, voluptatem at."
                tags={['photography', 'travel', 'winter']}
            />

            <Verticalcard
                image="/projects/LSPU.jpg"
                title="The Coldest Sunset"
                body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quos labore aspernatur modi, dignissimos, perferendis ipsam vero iusto repudiandae laudantium optio corrupti repellendus enim rerum? Cumque minus repellendus excepturi tempora id quibusdam consequatur et eveniet fuga! Omnis nulla dolorem ipsa ducimus eveniet! Optio ut iure saepe cum autem, voluptatem at."
                tags={['photography', 'travel', 'winter']}
            />

            <Verticalcard
                image="/projects/LSPU.jpg"
                title="The Coldest Sunset"
                body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quos labore aspernatur modi, dignissimos, perferendis ipsam vero iusto repudiandae laudantium optio corrupti repellendus enim rerum? Cumque minus repellendus excepturi tempora id quibusdam consequatur et eveniet fuga! Omnis nulla dolorem ipsa ducimus eveniet! Optio ut iure saepe cum autem, voluptatem at."
                tags={['photography', 'travel', 'winter']}
            />




        </div>


    );

}