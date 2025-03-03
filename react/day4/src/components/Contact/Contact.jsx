import React from "react";
import img_path from "../../assets/Mail-bro.png";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
    reset,
  } = useForm();
  const onSubmit = async(data) => {
    
    await fetch('http://localhost:3000/mails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          subject: data.subject,
          message: data.message,
        
        }),
      });
    reset();
  };

  const password = watch('password');

  return (
    <>
      <div className="container justify-content-center align-items-center d-flex my-5">
        <div className="row justify-content-center align-items-center col-10">
          <div className="col-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                <h1 className="align-self-start">Contact us</h1>

                <div className="d-flex flex-column gap-3 col-12">
                  <div className="d-flex flex-column">
                    <label className="form-label fs-5">Name</label>
                    <input
                      type="text"
                      name="name"
                      className={`form-control ${errors.name && touchedFields.name ? 'is-invalid' : ''}`}
                      placeholder="Your name"
                      {...register("name", { required: true, minLength: 3 })}
                    />
                    {errors.name && touchedFields.name && <p className="invalid-feedback">Full Name is required and should be at least 3 characters</p>}
                  </div>
                  <div className="d-flex flex-column">
                    <label className="form-label fs-5">Email</label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${errors.email && touchedFields.email ? 'is-invalid' : ''}`}
                      placeholder="name@example.com"
                      {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      })}
                    />
                    {errors.email && touchedFields.email && <p className="invalid-feedback">Valid Email is required</p>}
                  </div>
                  <div className="d-flex flex-column">
                    <label className="form-label fs-5">Password</label>
                    <input
                      type="password"
                      name="password"
                      className={`form-control ${errors.password && touchedFields.password ? 'is-invalid' : ''}`}
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        minLength: 8,
                      })}
                    />
                    {errors.password && touchedFields.password && <p className="invalid-feedback">Password is required and should be at least 8 characters</p>}
                  </div>
                  <div className="d-flex flex-column">
                    <label className="form-label fs-5">Confirm password</label>
                    <input
                      type="password"
                      name="conPassword"
                      className={`form-control ${errors.conPassword && touchedFields.conPassword ? 'is-invalid' : ''}`}
                      placeholder="Confirm Password"
                      {...register("conPassword", {
                        required: true,
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                    />
                    {errors.conPassword && touchedFields.conPassword && <p className="invalid-feedback">{errors.conPassword.message}</p>}
                  </div>
                  <div className="d-flex flex-column">
                    <label className="form-label fs-5">Subject</label>
                    <select
                      className={`form-control ${errors.subject && touchedFields.subject ? 'is-invalid' : ''}`}
                      {...register("subject", { required: true })}
                    >
                      <option value="">Select a subject</option>
                      <option value="sub1">Subject 1</option>
                      <option value="sub2">Subject 2</option>
                      <option value="sub3">Subject 3</option>
                    </select>
                    {errors.subject && touchedFields.subject && <p className="invalid-feedback">Subject is required</p>}
                  </div>
                  <div className="d-flex flex-column">
                    <label className="form-label fs-5">Message</label>
                    <textarea
                      name="message"
                      className={`form-control ${errors.message && touchedFields.message ? 'is-invalid' : ''}`}
                      placeholder="Message ..."
                      {...register("message", {
                        required: true,
                        minLength: 10,
                      })}
                    />
                    {errors.message && touchedFields.message && <p className="invalid-feedback">Message is required and should be at least 10 characters</p>}
                  </div>
                </div>
                <button type="submit" className="btn btn-dark btn-lg">
                  Send message
                </button>
              </div>
            </form>
          </div>
          <div className="col-6">
            <img src={img_path} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;