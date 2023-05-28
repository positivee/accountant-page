import React, { useState } from "react";
import {
  Contact,
  FormGorup,
  ContactColumns,
  SubmitButton,
  ErrorMessage,
  SuccessMessage,
} from "./contactStyles";
import { SectionIntroStyle } from "../ValuesSection/valuesStyles";

export default function ContactSection({ withMap, onlyForm = false }) {
  const initForm = {
    email: "",
    name: "",
    message: "",
  };

  const [formData, setFormData] = useState(initForm);
  const [formStatus, setFromStatus] = useState("");

  const handleChange = ({ target }) => {
    setFormData((prevData) => ({ ...prevData, [target.name]: target.value }));
  };

  const sendMail = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setFromStatus({ state: "loading", message: "Mail jest wysyłany!" });

      await fetch("/api/wyslij-mail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          console.log("Response recived");
          if (res.status === 200) {
            setFromStatus({
              state: "success",
              message: "Mail wysłany pomyślnie!",
            });
            setFormData(initForm);
          }
          if (res.status === 500) {
            setFromStatus({
              state: "error",
              message: "Błąd! Mail nie został wysłany!",
            });
          }
        })
        .catch(() => {
          setFromStatus({
            state: "error",
            message: "Błąd! Mail nie został wysłany!",
          });
        });
    }
  };

  return (
    <Contact>
      {!onlyForm && (
        <SectionIntroStyle>
          <span>Dlaczego my</span>
          <h2>Kontakt z nami</h2>
        </SectionIntroStyle>
      )}

      <ContactColumns withMap={withMap}>
        <div className="column-form">
          {!onlyForm && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum maximus, ex sed consequat volutpat, risus mauris varius
              lectus, sit amet sagittis quam mi at ipsum.
            </p>
          )}

          <form onSubmit={sendMail}>
            <FormGorup>
              <label htmlFor="email">Adres e-mail:</label>
              <input
                type="text"
                id="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                name="email"
                required
                onChange={handleChange}
                value={formData.email}
              />
            </FormGorup>
            <FormGorup>
              <label htmlFor="name">Imię:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={handleChange}
                value={formData.name}
              />
            </FormGorup>
            <FormGorup>
              <label htmlFor="message">Wiadomość:</label>
              <textarea
                type="text"
                id="message"
                name="message"
                rows={4}
                required
                onChange={handleChange}
                value={formData.message}
              />
            </FormGorup>
            {formStatus.state === "loading" ? (
              <div>Sending....</div>
            ) : formStatus.state === "error" ? (
              <ErrorMessage>{formStatus.message}</ErrorMessage>
            ) : (
              formStatus.state === "success" && (
                <SuccessMessage>{formStatus.message}</SuccessMessage>
              )
            )}

            <SubmitButton type="submit" value="Wyślij wiadmość" />
          </form>
        </div>
        {withMap && (
          <iframe
            className="column-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5639288.619154475!2d8.294745021311627!3d47.86445873237724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Niemcy!5e0!3m2!1spl!2spl!4v1685298127553!5m2!1spl!2spl"
            height="400"
            style={{ border: 0 }}
            aria-hidden="false"
          ></iframe>
        )}
      </ContactColumns>
    </Contact>
  );
}
