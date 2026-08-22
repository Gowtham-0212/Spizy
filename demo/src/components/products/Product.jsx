import Cards from "./Cards";
import "./Card.css";
import products from "../../Data/Data";

function Products({ selectedCategory }) {


     if (selectedCategory===null || selectedCategory==="Clear" ) {
        return null;
    }
    const filtered =
        selectedCategory=== "All"
            ? products:products.filter((p) => p.category === selectedCategory);

   

    return (
        <div className="container">

            {filtered.map((product) => (
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