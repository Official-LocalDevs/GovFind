import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { supabase } from '../lib/initSupabase';


const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <main>
                <h1>Welcome to GovFind!</h1>
                <p>
                    At GovFind, our mission is to empower underserved communities in New York City by providing easy access to essential government programs and assistance. We believe that access to vital resources should be effortless and equitable for all, regardless of socioeconomic status or background.
                </p>
                <p>
                    Through our platform, we aim to bridge the gap between citizens and government services, offering a user-friendly interface that simplifies the process of discovering and accessing programs designed to support those in need. By centralizing information and breaking down barriers to entry, GovFind strives to ensure that every individual and family can access the assistance they require to thrive.
                </p>
                <p>
                    At GovFind, we are committed to fostering transparency, inclusivity, and social equity. Our dedication to serving underserved communities drives us to continuously improve and expand our platform's reach, enabling individuals to navigate government resources with confidence and dignity.
                </p>
                <p>
                    Join us in our mission to create a more accessible, equitable, and supportive environment for all New Yorkers. Together, we can empower communities and build a brighter future for every individual we serve.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
