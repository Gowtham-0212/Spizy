import "./Categories.css";

function Categories({ selectedCategory, setSelectedCategory }) 
{

    const categories = [
        { name: "All 🍽️", value: "All" },
        { name: "Burger 🍔", value: "Burger" },
        { name: "Pizza 🍕", value: "Pizza" },
        { name: "Fast Food 🥡", value: "Fast Food" },
        { name: "Shawarma 🌯", value: "Shawarma" },
        { name: "Fried Chicken 🍗", value: "Fried Chicken" },
        { name: "Noodles 🍜", value: "Noodles" },
        { name: "Biriyani 🥘", value: "Biriyani" },
        { name:"Desserts 🍰",value:"Desserts"}
    ];

    return (
        <>
            <div className="category-container">

                {categories.map((cat) => (
                    <button
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}>

                        {cat.name}
                        
                    </button>
                ))}

                {/* <h1>{selectedCategory}</h1> */}

            </div>

        </>
        
    );
}

export default Categories;