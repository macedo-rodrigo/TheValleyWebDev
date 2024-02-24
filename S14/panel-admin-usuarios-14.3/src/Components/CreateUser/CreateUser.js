import "./CreateUser.scss";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

const API_URL = process.env.REACT_APP_API_URL;

const CreateUser = () => {
  //const { formatMessage } = useIntl();

  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {})
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className="page">
      <h1>Crear usuario</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__fields">
          <div className="form__field">
            <label>
              <FormattedMessage id="createUserPage.name" />
            </label>
            <input placeholder="Your name" type="text" {...register("name")} />
          </div>

          <div className="form__field">
            <label>
              <FormattedMessage id="createUserPage.username" />
            </label>
            <input
              placeholder="Choose a username"
              type="text"
              {...register("username")}
            />
          </div>

          <div className="form__field">
            <label>
              <FormattedMessage id="createUserPage.email" />
            </label>
            <input
              placeholder="Your email"
              type="text"
              {...register("email")}
            />
          </div>

          <div className="form__field">
            <label>
              <FormattedMessage id="createUserPage.phone" />
            </label>
            <input
              placeholder="Your phone number"
              type="text"
              {...register("phone")}
            />
          </div>

          <div className="form__field">
            <label>
              <FormattedMessage id="createUserPage.website" />
            </label>
            <input
              placeholder="Your Web Page"
              type="text"
              {...register("web")}
            />
          </div>
        </div>

        <button className="form__button" type="submit">Create user</button>
      </form>
    </div>
  );
};

export default CreateUser;
