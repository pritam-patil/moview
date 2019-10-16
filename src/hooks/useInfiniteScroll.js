/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { MAX_MOVIES, PAGE_INCREMENT } from "../constants";
import { debounce } from "../utils/debounce";

export const useInfiniteScroll = (maxPages) => {
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(PAGE_INCREMENT);

    const handleScroll = debounce(() => {
        const {
            innerHeight,
            document: {
                documentElement: {
                    scrollTop,
                    offsetHeight
                }
            }
        } = window;
        
        if (isLoading || (
            (innerHeight + scrollTop < offsetHeight)
        )) {
            return false;
        }

        setIsLoading(true);
    }, 500);

    useEffect(() => {
        if (!isLoading) {
            return;
        }

        if (count + PAGE_INCREMENT >= maxPages) {
            setCount(MAX_MOVIES);
        }
        else {
            setCount(count + PAGE_INCREMENT);
        }

        setIsLoading(false);
    }, [isLoading]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return { count };
}