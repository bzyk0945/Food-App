import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";

export const Menu: React.FC = () => {
  const [data, setData] = useState<{ idCategory: number; strCategoryThumb: string; strCategory: string; strCategoryDescription: string }[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const dispatch = useDispatch();

  const handleAddToCart = (item: { idCategory: number; strCategoryThumb: string; strCategory: string; strCategoryDescription: string }) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const resData = await response.json();
        setData(resData.categories);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const filteredData = data
    .filter((item) =>
      item.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.strCategory.localeCompare(b.strCategory);
      } else if (sortOrder === "desc") {
        return b.strCategory.localeCompare(a.strCategory);
      }
      return 0;
    });

  return (
    <main className="mt-20">
      <section>
        <div className="container lg:px-16 mx-auto">
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="I'm looking for..."
              className="bg-white text-black rounded-md px-4 py-2 w-1/2"
              value={searchTerm}
              onChange={handleSearch}
            />
            <select
              name="sortOrder"
              id="sortOrder"
              className="bg-white text-black rounded-md px-2 py-1"
              value={sortOrder}
              onChange={handleSort}
            >
              <option value="">Default</option>
              <option value="asc">Alphabetically, A-Z</option>
              <option value="desc">Alphabetically, Z-A</option>
            </select>
          </div>
          <div className="flex flex-wrap mt-10 text-center">
            {filteredData.map((item: { idCategory: number; strCategoryThumb: string; strCategory: string; strCategoryDescription: string }) => (
              <div key={item.idCategory} className="w-full lg:w-1/4">
                <img src={item.strCategoryThumb} alt={item.strCategoryDescription} />
                <h2>{item.strCategory}</h2>
                <button className="bg-blue-500 px-4 py-2 rounded-xl mt-4" onClick={() => handleAddToCart(item)}>Add to cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};