import React from 'react';
import DeveloperCarts from './DeveloperCarts';

const DeveloperPages = () => {
    const developers = [
        {
            id: 1,
            name: "Omme Salma",
            img: "https://e1.pxfuel.com/desktop-wallpaper/698/757/desktop-wallpaper-beauty-cute-cartoon-girl-cartoon-attitude-girl.jpg",
            title: "Front End Developer",
            // title: "Content Creator || Front End Developer",
            facebook: "url",
            linkedin: "url",
            github: "url",
            email: "url@gmail.com"
        },
        {
            id: 2,
            name: "Saif Islam Rony",
            img: "https://e1.pxfuel.com/desktop-wallpaper/672/914/desktop-wallpaper-cute-iphone-cartoon-boy-cartoon-character-boys-thumbnail.jpg",
            title: "Full Stack Developer",
            facebook: "url",
            linkedin: "url",
            github: "url",
            email: "url@gmail.com"
        },
        {
            id: 3,
            name: "Unknown",
            img: "https://e0.pxfuel.com/wallpapers/10/985/desktop-wallpaper-cartoon-girl-cartoon-girl-background-on-bat-cute-girly-cartoon.jpg",
            title: "Full Stack Developer",
            // title: "Team Leader || GitHub Manager || UI Developer || Front End Developer",
            facebook: "url",
            linkedin: "url",
            github: "url",
            email: "url@gmail.com"
        },
    ];
    return (
        <div>
            <div className="py-6 bg-gray-800 text-gray-100">
                <p className='text-2xl font-semibold  text-center'>OUR DEV TEAM</p>
                <h2 className="text-2xl text-sky-400 font-semibold sm:text-4xl text-center py-6">Hello Bank Developers</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-6 pl-10 py-14 gap-8">
                    {
                        developers.map(developer => <DeveloperCarts
                            key={developer.id}
                            developer={developer}>
                        </DeveloperCarts>)
                    }
                </div>

            </div>
        </div>
    );
};

export default DeveloperPages;