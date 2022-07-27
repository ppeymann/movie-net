import React from 'react';

import { useParams } from 'react-router-dom';
import PageHeader from '../components/page-header/PageHeader';

import {category as cate} from "../api/tmdbApi"

const Catalog = () => {

    const {category}=useParams();

    console.log(category)

    return (
        <>
        <PageHeader >
            {category === cate.movie ? 'Movie' : "Tv series"}
        </PageHeader>
        </>
    );
};

export default Catalog;