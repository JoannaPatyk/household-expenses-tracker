import React from 'react';
import Wrapper from '../assets/wrappers/ExpensesForm';
import categories from '../utils/categories';

function ExpensesForm() {
    return (
        <Wrapper>
            <div className="form-container">
                <div className="categories-container">
                    <h2>Dodaj wydatek</h2>
                    <button className="btn btn-hipster">dodaj nową kategorię</button>
                    <label>
                        Wybierz kategorię:
                        <select className="form-select">
                            {categories.map((category) => {
                                return (
                                    <option key={category.id} value={category.name}>
                                        {category.name}
                                    </option>
                                );
                            })}
                            ;
                        </select>
                    </label>
                </div>
                <div className="expense-container">
                    <label>
                        Kwota:
                        <input type="number" className="form-input" placeholder="wydana kwota" />
                    </label>
                    <label>
                        Komentarz:
                        <input type="text" className="form-input" placeholder="komentarz" />
                    </label>
                </div>
                <button className="btn">dodaj</button>
            </div>
        </Wrapper>
    );
}

export default ExpensesForm;
