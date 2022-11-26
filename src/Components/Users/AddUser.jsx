import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FiPlusCircle } from 'react-icons/fi';
import Modal from '../Modal/Modal';

function AddUser() {
  const [ImageSrc, setImageSrc] = useState('assets/images/no-image.png');
  const reader = new FileReader();
  const handleSave = () => { toast.success('User Saved !'); };

  return (
    <>
      <label htmlFor="modal-addUser" type="button" className="btn btn-primary btn-sm gap-2">
        <FiPlusCircle size={20} />
        Add User
      </label>
      <Modal modalId="modal-addUser">
        <div className=" w-full flex flex-col  md:flex-row justify-center items-center p-3 ">
          <div className="flex flex-col gap-3 justify-center lg:self-start items-center">
            <div className="avatar">
              <div className="w-52 rounded-full border-2">
                <img alt="profile-avatar" src={ImageSrc} />
              </div>
            </div>
            <input
              type="file"
              className="file-input file-input-sm focus:outline-0 w-full  mt-4"
              onChange={(e) => {
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = () => { setImageSrc(reader.result); };
              }}
            />
          </div>
          <div className="flex flex-col  items-center w-full">
            <div className="flex md:flex-row flex-col justify-center items-center gap-2 w-full">
              <div className="form-control md:w-1/3 w-full ">
                <label className="label">
                  <span className="label-text">First name</span>
                </label>
                <input type="text" placeholder="First name here" className="input input-bordered w-full " />
              </div>
              <div className="form-control md:w-1/3 w-full ">
                <label className="label">
                  <span className="label-text">Last name</span>
                </label>
                <input type="text" placeholder="Last name here" className="input input-bordered w-full " />
              </div>

            </div>
            <div className="flex md:flex-row flex-col justify-center items-center gap-2 w-full">
              <div className="form-control md:w-1/3 w-full ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="Email here" className="input input-bordered w-full " />
              </div>
              <div className="form-control md:w-1/3 w-full ">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input type="text" placeholder="Username here" className="input input-bordered w-full " />
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-center items-center gap-2 w-full">
              <div className="form-control md:w-1/3 w-full ">
                <label className="label">
                  <span className="label-text">Sex</span>
                </label>
                <select className="select select-bordered capitalize w-100 ">
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>
              <div className="form-control md:w-1/3 w-full ">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input type="text" placeholder="Phone here" className="input input-bordered w-full " />
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-4 items-center">

              <div className="modal-action">
                <button onClick={() => handleSave()} type="button" className="btn w-[80px] btn-success btn-sm">Save</button>
                <label type="button" htmlFor="modal-addUser" className="btn w-[80px] btn-sm btn-warning">Close</label>
              </div>

            </div>
          </div>
        </div>
      </Modal>

    </>
  );
}

export default AddUser;
