import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return null;
};

export default ScrollToTop;
