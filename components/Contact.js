import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formMail, setFormMail] = useState({
    name: '', email: '', phone: '', description: ''
  });

  const onChangeFormMail = (e) => {
    setFormMail({
      ...formMail, [e.target.name]: e.target.value
    });
  }

  const sendMail = async () => {
    console.log(formMail)
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formMail)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setFormMail({
          name: '', email: '', phone: '', description: ''
        })
      }
    })
  }

  return (
    <>
      <div className="lg:px-20 sm:px-0 xl:px-20 xl:mx-36 2xl:mx-32">
        <div className="relative">
          <img
            src={"images/business-min.jpg"}
            alt="Bg-Contact"
            className="rounded-lg w-full sm:h-[70rem] lg:h-[55rem]"
          />
          <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-r from-slate-700 to-slate-700 opacity-70 lg:rounded-lg sm:rounded-none"></div>
          <div className="absolute top-0 z-40 w-full lg:my-20 sm:my-10">
            <div className="font-bold text-light-gray text-center">
              <h1 className="text-4xl">Contact With Jetbizz Aviation</h1>
            </div>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 p-20 text-light-gray opacity-70">
              <input
                className="p-5 outline-none focus:ring focus:ring-gold placeholder:text-light-gray"
                type="text"
                name="name"
                onChange={onChangeFormMail}
                placeholder="Name*"
                value={formMail.name}
                style={{
                  backgroundColor: '#00000050'
                }}
              />
              <input
                className="p-5 outline-none focus:ring focus:ring-gold placeholder:text-light-gray"
                type="email"
                name="email"
                onChange={onChangeFormMail}
                placeholder="Email*"
                value={formMail.email}
                style={{
                  backgroundColor: '#00000050'
                }}
              />
              <input
                className="lg:col-span-2 p-5 outline-none focus:ring focus:ring-gold placeholder:text-light-gray"
                type="tel"
                name="phone"
                onChange={onChangeFormMail}
                placeholder="Phone*"
                value={formMail.phone}
                style={{
                  backgroundColor: '#00000050'
                }}
              />
              <textarea
                className="lg:col-span-2 sm:col-span-1 p-5 outline-none focus:ring focus:ring-gold placeholder:text-light-gray"
                cols="30"
                name="description"
                onChange={onChangeFormMail}
                placeholder="Message"
                rows="10"
                value={formMail.description}
                style={{
                  backgroundColor: '#00000050'
                }}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gold hover:bg-transparent duration-500 hover:text-gold hover:ring hover:ring-gold px-3 py-2 text-lg rounded-full font-semibold"
                onClick={sendMail}
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
