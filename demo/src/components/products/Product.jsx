import Cards from "./Cards";
import "./Card.css";
import products from "../../Data/Data";

function Products({ selectedCategory, choice }) {

    if (selectedCategory === null) 
    {
        return null;
    }

    // by category
    const categoryFiltered =
        selectedCategory === "All"
            ? products
            : products.filter(
                (product) =>
                    product.category === selectedCategory
            );

    // by search text
    const filteredProducts = categoryFiltered.filter((product) => {

        return product.name
            .toLowerCase()
            .includes(choice.toLowerCase());

    });

    return (
        <div className="container">

            {filteredProducts.map((product) => (
                <Cards
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    img={product.img}
                    price={product.price}
                    category={product.category}
                />
            ))}

        </div>
    );
}

export default Products;