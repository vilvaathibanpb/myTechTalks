import React from 'react';
import { useQuery } from './useQuery';

export const Query = (props) => {
    const {children, query, ...options} = props;
    const result = useQuery(query, options);
    return result && children ? children(result) : null;
}