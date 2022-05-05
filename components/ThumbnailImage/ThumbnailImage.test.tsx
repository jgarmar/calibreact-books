import React from 'react';
import { render } from '@testing-library/react';
import ThumbnailImage from './ThumbnailImage';

describe('<ThumbnailImage />',()=>{
    it('should render correctly',()=>{
        render(
            <ThumbnailImage />);
    })
})