import Categories from "./Categories";
import { useState } from "react";
import Products from "../components/products/Product";

function Category() {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [choice, setChoice] = useState("");

    return (
        <>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search your dish here..."
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}
                    className="input-box"
                />
            </div>

            <Categories
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <Products
                selectedCategory={selectedCategory}
                choice={choice}
            />
        </>
    );
}

export default Category