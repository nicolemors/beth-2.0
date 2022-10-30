import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  function onSubmit(data) {
    axios
      .post("https://eowwcfds8kda48r.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(
          `Thanks for signing up! Check your inbox for updates 😊`
        );
      })
      .catch((e) => console.error(e));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="input" {...register("email")} defaultValue="me@gmail.com"></input>
      <button role="submit">{isSubmitting ? "Submitting" : "Submit"}</button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
}
