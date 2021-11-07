import { useForm, ValidationError } from "@formspree/react";
import formStyles from "../styles/form.module.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);
  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className={formStyles.container}>
      <label htmlFor="email" className={formStyles.labels}>
        Your email:
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className={formStyles.inputs}
      ></input>
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className={formStyles.fieldErrors}
      />
      <label htmlFor="message" className={formStyles.labels}>
        Your message:
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        className={`${formStyles.inputs} ${formStyles.textarea}`}
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className={formStyles.fieldErrors}
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blueaccent rounded-xl py-2 px-5 text-white"
      >
        Send
      </button>
      <ValidationError
        errors={state.errors}
        className={formStyles.formErrors}
      />
    </form>
  );
}