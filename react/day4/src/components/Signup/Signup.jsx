import React from "react";

const Signup = () => {
  return (
    <>
      <div>
        <form>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
