/* router */
import { Outlet, useNavigate } from "react-router";

/* MUI */
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
    ListItemText,
    MenuItem,
    MenuList,
    Typography,
    useMediaQuery,
} from "@mui/material";

/* styles */
import styles from "./style.module.css";

const Products = () => {
    const matches = useMediaQuery("(min-width:1070px)");
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            {matches && (
                <Accordion className={styles.accordion} expanded>
                    <AccordionSummary
                        onClick={() => navigate("/Products")}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography
                            className={styles.accordionTitle}
                            sx={{
                                fontWeight: "bold",
                                borderBottom: "2px solid",
                                fontSize: "1.2rem",
                                paddingX: "5px",
                            }}
                        >
                            Our Categories
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <MenuList>
                            <MenuItem>
                                <ListItemText
                                    onClick={() => navigate("electronics")}
                                >
                                    Electronics
                                </ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemText
                                    onClick={() => navigate("women's clothing")}
                                >
                                    {" "}
                                    Women's Clothes
                                </ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemText
                                    onClick={() => navigate("men's clothing")}
                                >
                                    {" "}
                                    Men's Clothes
                                </ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemText
                                    onClick={() => navigate("jewelery")}
                                >
                                    Jewelry
                                </ListItemText>
                            </MenuItem>
                        </MenuList>
                    </AccordionDetails>
                </Accordion>
            )}

            <Outlet />
        </div>
    );
};

export default Products;
/* {
    <Grid container spacing={2} sx={{ marginX: "auto" }}>
        {data?.data.map((item: Product) => (
            <Grid item xs={12} md={3}>
                <ProductCard
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                />
            </Grid>
        ))}
    </Grid>;
} */
