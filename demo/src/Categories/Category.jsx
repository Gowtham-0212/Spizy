import Categories from "./Categories";
import { useState } from "react";
import Products from "../components/products/Product";

function Category()
{
    const [selectedCategory,setSelectedCategory] = useState("All")
    
    return(
         <>
            <Categories selectedCategory={selectedCategory}
             setSelectedCategory={setSelectedCategory}/> 
              
            <Products selectedCategory={selectedCategory}/>
         </>
         )
}
export default Category