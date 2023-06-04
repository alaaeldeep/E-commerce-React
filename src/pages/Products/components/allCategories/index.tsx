/* react staff */
import { useEffect } from "react";

/* react query */
import UseFetch from "../../../../hooks/Queries/useFetch";

/* types */
import { Product } from "../../model";

/* components */
import ProductCard from "../productCard";
import CustomSkelton from "../../../../components/skelton";

/* styles */
import styles from "../../style.module.css";

const AllCategories = () => {
    const { isLoading, data } = UseFetch("/Products");

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    if (isLoading) {
        return (
            <div className={styles.productsContainer}>
                <CustomSkelton />
                <CustomSkelton />
            </div>
        );
    }
    return (
        <div className={styles.productsContainer}>
            {data?.data.map((item: Product) => (
                <ProductCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    quantity={item.quantity}
                />
            ))}
        </div>
    );
};

export default AllCategories;
