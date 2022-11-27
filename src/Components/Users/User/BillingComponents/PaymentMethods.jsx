import React from 'react';

const PaymentMethods = ({ User }) => (
  <div className="card bg-base-100 p-3 text-base-content shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]   ">
    <div className="card-body p-1">
      <div className="card-title opacity-70 m-3 italic">Payments Informations</div>
      <div className="flex flex-col xl:flex-row xl:flex-between justify-center items-center gap-4">
        <div id="card" className="relative w-full h-60 rounded-2xl font-mono text-white overflow-hidden cursor-pointer transition-all duration-500">
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-6 p-6 bg-gradient-to-tr from-secondary to-neutral transition-all duration-100 delay-200 z-20">

            <div className="flex justify-between items-center">
              <img src="/assets/images/ccChip.png" alt="Smart card" className="w-14" />

              <img src="/assets/images/visa.png" alt="Visa" className="w-12" />
            </div>

            <div className="">
              <label htmlFor="" className="hidden">Card Number</label>
              <input
                type="text"
                id=""
                value={`**** **** **** ${User.payments.creditCard.slice(-4)}`}
                readOnly
                className="outline-none w-full bg-transparent text-center text-2xl"
              />
            </div>

            <div className="w-full flex flex-row justify-between">

              <div className="w-full flex flex-col">
                <label htmlFor="">Card holder</label>
                <input
                  type="text"
                  id=""
                  value={`${User.firstName} ${User.lastName}`}
                  readOnly
                  className="outline-none bg-transparent"
                />
              </div>

              <div className="w-1/4 flex flex-col hidden md:block">
                <label htmlFor="">Expires</label>
                <input type="text" id="" value="12/34" readOnly className="outline-none bg-transparent" />
              </div>

            </div>

          </div>

        </div>
        <div className="flex w-full  flex-col justify-start ">

          <div className="flex flex-col w-full justify-start gap-2 mt-4  opacity-70 font-semibold">
            <div className="flex  justify-between">
              <span className="">Paypal</span>
              <span className="badge badge-success badge-md">Linked</span>
            </div>
            <div className="flex justify-between">
              <span className="">Paypal ID </span>
              <span className="text-md opacity-70 truncate">{`${User.payments.paypal.slice(0, 4)}***${User.payments.paypal.slice(4, 8)}`}</span>
            </div>
            <div className="flex justify-between">
              <span className="">IBAN</span>
              <span className="text-md opacity-70">{`${User.payments.iban.slice(0, 4)}***${User.payments.iban.slice(4, 8)}`}</span>
            </div>
            <div className="flex justify-between">
              <span className="">BIC</span>
              <span className="text-md opacity-70">{User.payments.bic}</span>
            </div>
            <div className="flex justify-between">
              <span className="">Billing Address</span>
              <span className="text-md opacity-70">{User.address}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <button type="button" className="mt-2 btn btn-xs btn-primary self-end">View More</button>
          </div>
        </div>

      </div>

    </div>
  </div>
);

export default PaymentMethods;
