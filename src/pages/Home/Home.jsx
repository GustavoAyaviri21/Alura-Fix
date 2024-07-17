import { useEffect } from 'react';
import { Banner, CategoryList } from '../../components';
import { useVideosStore } from '../../zustand/useVideosStore';
import styles from './Home.module.css';



export const Home = () => {
    const { 
        categories,
        fetchVideos,
        fetchCategories,   
    } = useVideosStore((state) => state);

    useEffect(() => {
        fetchVideos();
        fetchCategories();
    }, [fetchVideos, fetchCategories]);
    return (
        <div className={styles.container}>
            <Banner />
            {categories.map((category, index) => {
                return (
                    <CategoryList
                        key={index}
                        category={category}
                     
                    />

                )
            })}
            <div
                className={styles.content}
            >
            </div>
        </div>
    );
}