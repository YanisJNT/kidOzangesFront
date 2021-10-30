import { useForm } from "react-hook-form";
import "./style.css";
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="contact">
      <h1 className="title"> Contactez-nous </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Entrez votre adresse mail : </label>
        <input
          className="input--email"
          placeholder="Email"
          type="email"
          {...register("email")}
        />{" "}
        {/* register an input */}
        <label> Entrez votre message : </label>
        <textarea
          rows="5"
          placeholder="Votre message"
          cols="30"
          maxLength="500"
          name="description du problème"
          className="input--text"
          {...register("text", { required: true })}
        />
        {errors.email && <p>Votre email est obligatoire.</p>}
        {/* <input {...register('text', { pattern: /\d+/ })} /> */}
        {errors.text && (
          <p>
            Expliquez-nous en quelques mots la raison de votre prise de contact
          </p>
        )}
        <input className="input--submit" type="submit" />
      </form>
    </div>
  );
}
