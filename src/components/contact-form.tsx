"use client";

import { useState, useTransition } from "react";
import { toast } from "react-toastify";
import { contactMe } from "../../contactme";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        const result = await contactMe(formData);
        if (result.success) {
          toast.success(result.success);
          setFormData({
            fullName: "",
            email: "",
            message: "",
          });
        } else {
          toast.error(result.error);
        }
      } catch (error) {
        toast.error(
          "Something went wrong while contacting me, please try again."
        );
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className='mt-4 lg:mt-6 md:w-[80%]  md:mb-48'>
      {isPending && <p>Submitting...</p>}
      <div className='mb-4'>
        <label
          className='block text-[#808080] text-sm  mb-1'
          htmlFor='fullName'
        >
          Full Name
        </label>
        <input
          type='text'
          name='fullName'
          id='fullName'
          value={formData.fullName}
          onChange={handleChange}
          className='w-full px-2 py-1.5 lg:px-3 lg:py-2.5 border border-[#E7EBEE] rounded-lg focus:outline-none  '
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block text-[#808080] text-sm  mb-1' htmlFor='email'>
          Email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          value={formData.email}
          onChange={handleChange}
          className='w-full px-2 py-1.5 lg:px-3 lg:py-2.5 border border-[#E7EBEE] rounded-lg focus:outline-none  '
          required
        />
      </div>
      <div className=''>
        <label className='block text-[#808080] text-sm  mb-1' htmlFor='message'>
          Your Message
        </label>
        <textarea
          name='message'
          id='message'
          value={formData.message}
          onChange={handleChange}
          className='w-full px-2 py-1.5 lg:px-3 lg:py-2.5 border rounded-lg focus:outline-none '
          rows={4}
          required
        ></textarea>
      </div>
      <button className='bg-[#1E1414] w-full md:w-auto text-white font-medium px-8 py-3 rounded-lg  mt-8 md:mt-4 lg:mt-8'>
        Send Mail
      </button>
    </form>
  );
};

export default ContactForm;
