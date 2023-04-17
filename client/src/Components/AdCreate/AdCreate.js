import { useState, useEffect } from 'react';
import { useForm } from '../../Hooks/Form/useForm'

import { useAdContext } from '../../contexts/AdContext';
import './AdCreate.css'

export const AdCreate = () => {
    const { createGame } = useAdContext();
    const { values, onSubmit, changeHandler } = useForm({
        title: '',
        category: '',
        imageUrl: '',
        price: '',
        description: ''
    }, createGame)

    const [errors, setErrors] = useState({
        title: false,
        category: false,
        imageUrl: false,
        price: false,
        description: false,
    });

    const onBlurHandler = (e) => {
        // resetServerErrors([]);
        if (e.target.name === 'title' && e.target.value === '') {
                setErrors(state => ({ ...state, [e.target.name]: true }));

        } else if (e.target.name === 'imageUr;' && e.target.value === '') {
            setErrors(state => ({ ...state, [e.target.name]: true }))

        } else if (e.target.name === 'price' && e.target.value === '') {
            setErrors(state => ({ ...state, [e.target.name]: true }))
        } else if (e.target.name === 'description' &&
            (e.target.value.length < 10 || e.target.value.length > 100)) {
            setErrors(state => ({ ...state, [e.target.name]: true }));
        } 
    }
    
    return (
        <>
            <link rel="stylesheet" href="css/normalize.css" />
            <link
                href="https://fonts.googleapis.com/css?family=Nunito:400,300"
                rel="stylesheet"
                type="text/css"
            />
            <link rel="stylesheet" href="css/main.css" />
            <form onSubmit={onSubmit} className="createForm">
                <h1 className="titleCreateAd white">Добави обява</h1>
                <fieldset>
                    <legend className="white">
                        Какво предлагаш?
                    </legend>

                    <label htmlFor="title" className="white">Заглавие*</label>
                    <input
                        type="text"
                        className={"titleAdd"}
                        id="title"
                        value={values.title}
                        onChange={changeHandler}
                        name="title"
                        placeholder="Например: iPhone 11 с гаранция"
                    />

                    <label htmlFor="category" className="white">Категория*</label>
                    <select
                        // type="text"
                        // id="category"
                        onChange={changeHandler}
                        value={values.category}
                        name="category"
                    >
                        <option onChange={changeHandler} value="autoParts" >Авточасти, аксесоари, гуми и джанти, коли</option>
                        <option onChange={changeHandler} value="realEstate">Недживими Имоти</option>
                        <option onChange={changeHandler} value="electronic">Електроника</option>
                        <option onChange={changeHandler} value="animals">Животни</option>
                        <option onChange={changeHandler} value="forBabies">За бебето и детето</option>
                        <option onChange={changeHandler} value="tools">Машини, инструменти, бизнес оборудване</option>
                        <option onChange={changeHandler} value="fashion">Мода</option>

                    </select>

                    <label htmlFor="text" className="white">Снимка</label>
                    <input
                        type="url"
                        className={"urlAdd"}
                        value={values.imageUrl}
                        onChange={changeHandler}
                        id="imageUrl"
                        name="imageUrl"
                    />
                    <label htmlFor="price" className="white">Цена</label>
                    <input
                        type="number"
                        className={"numberAdd"}
                        value={values.price}
                        onChange={changeHandler}
                        id="price"
                        name="price"
                    />

                </fieldset>
                <fieldset>
                    <label htmlFor="description" className="white">Описание</label>
                    <textarea
                    placeholder='Мин. 10 символа'
                        id="description"
                        name="description"
                        value={values.description}
                        onChange={changeHandler}
                    />
                </fieldset>
                <fieldset>
                </fieldset>
                <input className={"btnAdd"} type="submit" value="Добави" />
            </form>
        </>




    );
}