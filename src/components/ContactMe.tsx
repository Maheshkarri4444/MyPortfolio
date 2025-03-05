// import React, { useState } from 'react';
// import { Instagram, Linkedin, X, Github } from 'lucide-react';
// import { SectionHeading , TextReveal} from './ui/typography';
// import { SlideIn } from './ui/transitions';

// export default function ContactMe() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   return (
//     <div  className="max-w-full px-4 py-12 text-white bg-gradient-to-br bg-black/30">
//         <SectionHeading className="md:pl-16">
//             <SlideIn className="text-white/40">Contact</SlideIn>
//             <br />
//             <SlideIn><span className='text-red-600'>M</span>e</SlideIn>
//         </SectionHeading>
//       <div className="grid grid-cols-1 gap-12 mx-auto md:pl-16 max-w-7xl lg:grid-cols-2">
//         {/* Contact Form */}
//         <div className="space-y-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="w-full px-2 py-3 transition-colors bg-transparent border-b border-gray-600 outline-none focus:border-white"
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-2 py-3 transition-colors bg-transparent border-b border-gray-600 outline-none focus:border-white"
//               />
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Enter the subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full px-2 py-3 transition-colors bg-transparent border-b border-gray-600 outline-none focus:border-white"
//               />
//             </div>
//             <div>
//               <textarea
//                 name="message"
//                 placeholder="Enter your message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={4}
//                 className="w-full px-2 py-3 transition-colors bg-transparent border-b border-gray-600 outline-none resize-none focus:border-white"
//               />
//             </div>
//             <button
//               type="submit"
//               className="px-8 py-3 transition-colors border rounded-full border-white/20 hover:bg-white/10"
//             >
//              <TextReveal>Send Message</TextReveal> 
//             </button>
//           </form>
//         </div>

//         {/* Contact Information */}
//         <div className="flex flex-col justify-between lg:pl-12">
//           <div className="space-y-8">
//             <h2 className="text-2xl font-light"><TextReveal>Get in touch</TextReveal></h2>
//             <div className="space-y-2">
//               <p className="text-2xl font-semibold text-gray-200 sm:text-3xl"><span className='text-red-600'>m</span>aheshkarri2109<span className='text-red-600'>@</span>gmail.com</p>
//               <p className="text-xl text-gray-400">+91-8008791096</p>
//               <p className="text-xl text-gray-400">Andhra Pradesh, India</p>
//             </div>
            
//             {/* Social Links */}
//             <div className="flex gap-6 pt-8">
//               <a href="https://www.instagram.com/mahesh_karri_16?igsh=MTZwcmJlaHE3MTE2aA==" target='_blank' className="text-red-600 transition-colors hover:text-white">
//                 <Instagram size={24} />
//               </a>
//               <a href="https://www.linkedin.com/in/maheshkarri4444/" target='_blank' className="text-red-600 transition-colors hover:text-white">
//                 <Linkedin size={24} />
//               </a>
//               <a href="https://github.com/Maheshkarri4444" target='_blank' className="text-red-600 transition-colors hover:text-white">
//                 <Github size={24} />
//               </a>
//             </div>
//           </div>


//         </div>
//       </div>
//                 {/* Footer */}
//           <div className="flex items-center justify-between pt-12 mt-12 mb-8 text-sm text-gray-400 border-t sm:mb-0 border-white/10">
//             <p>© 2025 Mahesh's Portfolio</p>
//             <p>developed by  <a>@Mahesh</a></p>
//           </div>
//     </div>
//   );
// }

import React, { useState, useRef } from 'react';
import { Instagram, Linkedin, X, Github } from 'lucide-react';
import { SectionHeading, TextReveal } from './ui/typography';
import { SlideIn } from './ui/transitions';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactMe() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setLoading(true);
      await emailjs.sendForm(
        'service_nnz5ccg', // Replace with your EmailJS service ID
        'template_r3k8fms', // Replace with your EmailJS template ID
        formRef.current,
        '_H0Noj8rGU2NuOu6b' // Replace with your EmailJS public key
      );
      
      toast.success('Message sent successfully!');
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-full px-4 py-12 text-white bg-gradient-to-br bg-black/30">
      <Toaster position="top-right" />
      <SectionHeading className="md:pl-16">
        <SlideIn className="text-white/40">Contact</SlideIn>
        <br />
        <SlideIn><span className='text-red-600'>M</span>e</SlideIn>
      </SectionHeading>
      <div className="grid grid-cols-1 gap-12 mx-auto md:pl-16 max-w-7xl lg:grid-cols-2">
        {/* Contact Form */}
        <div className="space-y-8">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-2 py-3 transition-colors bg-transparent border-b border-gray-600 outline-none focus:border-white"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-2 py-3 transition-colors bg-transparent border-b border-gray-600 outline-none focus:border-white"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Enter the subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-2 py-3 transition-colors bg-transparent border-b border-gray-600 outline-none focus:border-white"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-2 py-3 transition-colors bg-transparent border-b border-gray-600 outline-none resize-none focus:border-white"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 transition-colors border rounded-full border-white/20 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <TextReveal>{loading ? 'Sending...' : 'Send Message'}</TextReveal>
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-between lg:pl-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-light"><TextReveal>Get in touch</TextReveal></h2>
            <div className="space-y-2">
              <p className="text-2xl font-semibold text-gray-200 sm:text-3xl">
                <span className='text-red-600'>m</span>aheshkarri2109<span className='text-red-600'>@</span>gmail.com
              </p>
              <p className="text-xl text-gray-400">+91-8008791096</p>
              <p className="text-xl text-gray-400">Andhra Pradesh, India</p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6 pt-8">
              <a 
                href="https://www.instagram.com/mahesh_karri_16?igsh=MTZwcmJlaHE3MTE2aA==" 
                target='_blank' 
                rel="noopener noreferrer"
                className="text-red-600 transition-colors hover:text-white"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/maheshkarri4444/" 
                target='_blank' 
                rel="noopener noreferrer"
                className="text-red-600 transition-colors hover:text-white"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/Maheshkarri4444" 
                target='_blank' 
                rel="noopener noreferrer"
                className="text-red-600 transition-colors hover:text-white"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="flex items-center justify-between pt-12 mt-12 mb-8 text-sm text-gray-400 border-t sm:mb-0 border-white/10">
        <p>© 2025 Mahesh's Portfolio</p>
        <p>developed by <span>@Mahesh</span></p>
      </div>
    </div>
  );
}