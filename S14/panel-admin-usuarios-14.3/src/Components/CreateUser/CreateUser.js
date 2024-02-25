import "./CreateUser.scss";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { FormattedMessage} from "react-intl";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

const CreateUser = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const navigate = useNavigate(); // Esto es lo que nos permite navegar entre una página y otra por medio de un evento

  const onSubmit = (data) => {

    console.log("onSubmit function!")
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/users"); // Redirige a la página "Users.js"
        }
      })
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className="page">
      <h1><FormattedMessage id="header.createUser"/></h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__fields">
          <div className="form__field">
            <label>
              <FormattedMessage id="createUserPage.name" />
            </label>
            <input placeholder="Your name" type="text" {...register("name", { required: true })} />
          </div>

          <div className="form__field">
            <label>
              <FormattedMessage id="createUserPage.username" />
            </label>
            <input
              placeholder="Choose a username"
              type="text"
              {...register("username", { required: true })}
            />
          </div>

          <div className="form__field">
            <label>
              <FormattedMessage id="createUserPage.email" />
            </label>
            <input
              placeholder="Your email"
              type="text"
              {...register("email", { required: true })}
            />
          </div>

          <div className="form__field">
            <label>
              <FormattedMessage id="createUserPage.phone" />
            </label>
            <input
              placeholder="Your phone number"
              type="text"
              {...register("phone", { required: true }) }
            />
          </div>

          <div className="form__field">
            <label>
              <FormattedMessage id="createUserPage.website" />
            </label>
            <input
              placeholder="Your Web Page"
              type="text"
              {...register("web", { required: true })}
            />
          </div>
        </div>

        <button className="form__button" type="submit"><FormattedMessage id="createUserPage.submitButton"/></button>
      </form>
    </div>
  );
};

export default CreateUser;

//{errors?.name && <p className='register-form__error'>Este campo es obligatorio</p>}
