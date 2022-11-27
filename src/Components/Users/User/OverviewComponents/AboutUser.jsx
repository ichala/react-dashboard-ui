import React from 'react';

const AboutUser = () => (
  <div className="card w-full  bg-base-100 text-base-content shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
    <div className="card-body p-3">
      <div className="card-title italic opacity-70 m-3">About User</div>
      <p className="italic opacity-70">
        I am passionate about my work. Because I love what I do,
        I have a steady source of motivation that drives me to do my best. In my last job,
        this passion led me to challenge myself daily and learn new skills that
        helped me to do better work.
        For example, I taught myself how to use Photoshop to improve the quality
        of our photos and graphics. I soon became the go-to person for any design needs.

      </p>
      <button type="button" className=" btn btn-xs btn-primary self-end">View Profile</button>

    </div>
  </div>
);

export default AboutUser;
