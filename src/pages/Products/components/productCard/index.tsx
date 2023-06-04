/* MUI */
import { Box, Paper, Rating, Typography } from "@mui/material";

import { Product } from "../../model";

/* store */
import { useOwnStore } from "../../../../store/zustand";

/* styles */
import styles from "./card.module.css";
import CustomModal from "../../ProductDetailModal";

/* react staff */
import { useState } from "react";

const ProductCard = (props: Product) => {
    const addToCart = useOwnStore((store) => store.addToCart);
    const { title, image, description, price, category, id, quantity } = props;

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <CustomModal
                open={open}
                handleClose={handleClose}
                productDetails={props}
            />
            <Box sx={{ display: "flex" }}>
                <Paper sx={{ width: "250px", borderRadius: "10px" }}>
                    <div className={styles.image_wrapper}>
                        {/* product image */}
                        <img
                            className={styles.ProductImage}
                            style={{ height: "250px" }}
                            src={image}
                            alt=""
                        />

                        {/* btns container */}
                        <div
                            className={`${styles.overlayX} ${styles.btnContainer}`}
                        >
                            <button
                                onClick={() => addToCart(props, 1)}
                                className={styles.btn}
                            >
                                Add
                            </button>
                            <button onClick={handleOpen} className={styles.btn}>
                                View
                            </button>
                        </div>
                    </div>
                    <div>
                        {/* product name */}
                        <Typography variant="h5" sx={{ padding: "5px" }}>
                            {title}
                        </Typography>

                        {/* rating */}
                        <Rating
                            sx={{ padding: "5px" }}
                            name="half-rating-read"
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                        />

                        {/* price */}
                        <div className={styles.priceContainer}>
                            <span className={styles.pricePadge}>$ {price}</span>
                            <span className={styles.pricePadge2}>
                                $ {price + 99}
                            </span>
                        </div>
                    </div>
                </Paper>
            </Box>
        </>
    );
};

export default ProductCard;
