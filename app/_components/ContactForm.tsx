"use client";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mldrqeov");

  return (
    <section className="bg-lightBlue py-20 text-center">
      <h2 className="text-3xl md:text-5xl font-heading mb-4">
        A Question? Contact Us
      </h2>
      <form
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
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="adriana@crowdcoded.org"
            className="w-full md:w-1/2 p-3 rounded focus:outline-none focus:ring-2 focus:ring-coralBlue"
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          placeholder="Your message..."
          className="w-full p-3 h-40 rounded focus:outline-none focus:ring-2 focus:ring-coralBlue"
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
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
