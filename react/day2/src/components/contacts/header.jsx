import { TiUserAdd } from "react-icons/ti";


const header = ({handleNameInput,nameInput,handlePhoneInput,phoneInput,handleImgInput,imgInput,handleAddUser}) => {
  return (
    <>
    <h2 className="text-primary">Add contact</h2>
            <div className=" row align-items-center justify-content-around ">
              <input
                type="text"
                placeholder="Name"
                className="col-3"
                value={nameInput}
                onChange={(e) => {
                  handleNameInput(e);
                }}
              />
              <input
                type="text"
                placeholder="Phone"
                className="col-3"
                value={phoneInput}
                onChange={(e) => {
                  handlePhoneInput(e);
                }}
              />
              <input
                type="text"
                placeholder="img_url"
                className="col-3"
                value={imgInput}
                onChange={(e) => {
                  handleImgInput(e);
                }}
              />
              <button
                className="btn btn-primary rounded-pill d-flex gap-2 align-items-center w-auto "
                onClick={handleAddUser}
              >
                <TiUserAdd />
                click
              </button>
            </div>
    </>
  )
}

export default header