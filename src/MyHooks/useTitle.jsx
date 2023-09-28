import  { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() =>{
       document.title = `${title} - Hello Bank `
    },[title])
};

export default useTitle;