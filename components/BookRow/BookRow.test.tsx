import React from 'react';
import { render } from '@testing-library/react';
import BookRow from './BookRow';

describe('<BookRow />',()=>{
    it('should render correctly',()=>{
        render(
            <BookRow />);
    })
})