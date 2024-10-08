"use client";
import React, { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ContactFormProps } from "@/app/types";

const ContactForm = ({ formId, dict }: ContactFormProps) => {
  const [state, handleSubmit] = useForm(formId);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
    }
  }, [state.succeeded, state.submitting, formRef]);

  return (
    <section className="bg-lightBlue py-20 text-center">
      <h2 className="landing-header">
        {dict.landing.contact.title}
      </h2>
      {state.succeeded ? (
        <p className="text-xl text-green-600">
          {dict.landing.contact.success}
        </p>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="px-4 md:px-0 max-w-2xl mx-auto space-y-4 flex flex-col"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Adriana Ito"
              className="w-full md:w-1/2 p-3 rounded focus:outline-none focus:ring-2 focus:ring-coralBlue"
              required
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="adriana@crowdcoded.org"
              className="w-full md:w-1/2 p-3 rounded focus:outline-none focus:ring-2 focus:ring-coralBlue"
              required
            />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            placeholder={dict.landing.contact.msgPlaceholder}
            className="w-full p-3 h-40 rounded focus:outline-none focus:ring-2 focus:ring-coralBlue"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full md:w-36 font-heading text-2xl px-12 py-1 bg-coralBlue text-white rounded hover:bg-blue-700 self-end hover:opacity-80"
          >
            {dict.landing.contact.send}
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
