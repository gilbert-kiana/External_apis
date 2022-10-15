import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </div>
  );
};

import React, { useState } from 'react';

import { CATEGORIES } from '../../constants/categories';

const CategoriesBar = ({ onSelect }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    const setCategory = e => {
        const value = e.target.innerText;

        onSelect(value);
        setActiveCategory(value);
    };

    return (
        <>
            {CATEGORIES.map(cat => (
                <div key={cat.name} className="my-4">
                    <h4 className="font-krona mb-2">{cat.name}</h4>
                    <ul className="ml-4 space-y-2">
                        {cat.subCategories.map(subCat => (
                            <li
                                key={subCat}
                                onClick={setCategory}
                                className={`cursor-pointer hover:text-yellow ${
                                    activeCategory === subCat ? 'text-yellow font-medium' : ''
                                }`}
                            >
                                {subCat}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
};

export default CategoriesBar;

export default Navbar;
