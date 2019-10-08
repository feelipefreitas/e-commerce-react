import React from 'react';

import Directory from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = (props) => {
    console.log('HOMEPAGE props', props);
    return <HomePageContainer>
        <Directory />
    </HomePageContainer>
};

export default HomePage;
