/* router */
import { useNavigate } from "react-router";

/* MUI */
import { Paper } from "@mui/material";

/* styles */
import styles from "../../home.module.css";

type CategoryProps = {
    title: string;
    number: "1" | "2" | "3" | "4";
};
const Category = ({ title, number }: CategoryProps) => {
    const navigate = useNavigate();
    switch (number) {
        case "1":
            return (
                <Paper
                    sx={{ position: "relative" }}
                    onClick={() => navigate(`/products/${title}`)}
                >
                    <div
                        onClick={() => navigate(`/products/${title}`)}
                        className={`${styles.imgContainer} ${styles.imgContainer1}`}
                    ></div>
                    <div className={styles.textCategory}>{title}</div>
                </Paper>
            );
        case "2":
            return (
                <Paper
                    sx={{ position: "relative" }}
                    onClick={() => navigate(`/products/${title}`)}
                >
                    <div
                        onClick={() => navigate(`/products/${title}`)}
                        className={`${styles.imgContainer} ${styles.imgContainer2}`}
                    ></div>
                    <div className={styles.textCategory}>{title}</div>
                </Paper>
            );
        case "3":
            return (
                <Paper
                    sx={{ position: "relative" }}
                    onClick={() => navigate(`/products/${title}`)}
                >
                    <div
                        className={`${styles.imgContainer} ${styles.imgContainer3}`}
                    ></div>
                    <div className={styles.textCategory}>{title}</div>
                </Paper>
            );
        case "4":
            return (
                <Paper
                    sx={{ position: "relative" }}
                    onClick={() => navigate(`/products/${title}`)}
                >
                    <div
                        className={`${styles.imgContainer} ${styles.imgContainer4}`}
                    ></div>
                    <div className={styles.textCategory}>{title}</div>
                </Paper>
            );
    }
};

export default Category;
