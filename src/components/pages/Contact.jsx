import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../layout/Container";
import Intro from "../layout/Intro";
import "./Contact.css";
import Message from "../layout/Message";

export const Contact = () => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mkwrjx7",
        "template_d6ws3dp",
        form.current,
        "XZixRYvbboWgYiZd2"
      )
      .then(
        (result) => {
          if (result.status == 200) {
            setMessage("Mensagem enviada com sucesso!");
            setType("success");
            var form = document.getElementById("form");
            form.reset();
          }
        },
        (error) => {
          setMessage("Erro ao enviar mensagem!");
          setType("error");
          
        }
      );
  };



  return (
    <Container customClass="contact_container">
      <section id="contato">
        <Intro intro="Entre em contato" text="Contate-me" />
        <div className="contact">
          <h3>Me diga sua ideia</h3>
          {message && <Message msg={message} type={type} />}
          <form className="form" id="form" ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Nome</label>
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder="Insira seu nome"
            />
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="Insira seu email"
            />
            <label>Projeto</label>
            <textarea required name="project" placeholder="Ideia de projeto" />
            <button className="btn send" type="submit">
              Enviar <i class="bx bx-mail-send iconMail"></i>
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
};
