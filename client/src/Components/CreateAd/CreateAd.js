import { useState, useEffect } from 'react';
import { useForm } from '../../Hooks/Form/useForm'
import './CreateAd.css'

export const CreateAd = () => {

    

    return (
        <>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Sign Up Form</title>
            <link rel="stylesheet" href="css/normalize.css" />
            <link
                href="https://fonts.googleapis.com/css?family=Nunito:400,300"
                rel="stylesheet"
                type="text/css"
            />
            <link rel="stylesheet" href="css/main.css" />
            <form className="createForm">
                <h1 className="titleCreateAd white">Добави обява</h1>
                <fieldset>
                    <legend className="white">
                        Какво предлагаш?
                    </legend>

                    <label htmlFor="title" className="white">Заглавие*</label>
                    <input type="text" className={"titleAdd"} id="title" name="title" placeholder="Например: iPhone 11 с гаранция" />
                    <label htmlFor="job" className="white">Категория*</label>
                    <select id="category" name="user_job">
                        <option value="autoParts" >Авточасти, аксесоари, гуми и джанти, коли</option>
                        <option value="realEstate">Недживими Имоти</option>
                        <option value="electronic">Електроника</option>
                        <option value="animals">Животни</option>
                        <option value="forBabies">За бебето и детето</option>
                        <option value="tools">Машини, инструменти, бизнес оборудване</option>
                        <option value="fashion">Мода</option>
                    </select>
                    <label htmlFor="text" className="white">Снимка</label>
                    <input type="url" className={"urlAdd"} id="imageUrl" name="imageUrl" />
                    <label htmlFor="price" className="white">Цена</label>
                    <input type="number" className={"numberAdd"} id="price" name="price" />

                </fieldset>
                <fieldset>
                    <label htmlFor="description" className="white">Описание</label>
                    <textarea id="description" name="description" defaultValue={""} />
                </fieldset>
                <fieldset>
                </fieldset>
                <button className={"btnAdd"} type="submit">Добави </button>
            </form>
        </>




    );
}