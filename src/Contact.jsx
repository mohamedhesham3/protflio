import { FaGithub, FaFacebook, FaLinkedin, FaSquareUpwork } from "react-icons/fa6";

const Contact = () => (
  <section id="contact" className="bg-gray-900 text-gray-100 p-8">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>

      <div className="flex flex-col">
        <div className="flex items-center mb-4">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m4-4v8"></path>
          </svg>
          <span>Email: <a href="mailto:mohamedhesham3324@gmail.com" className="text-blue-400 hover:underline">mohamedhesham3324@gmail.com</a></span>
        </div>

        <div className="flex items-center mb-4">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m4-4v8"></path>
          </svg>
          <span>Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">01155740175</a></span>
        </div>

        <div className="flex items-center mb-4">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7v14"></path>
          </svg>
          <span>Socials:</span>
          <div className="ml-2 flex flex-col">
            <a href="https://github.com/mohamedhesham3" target="_blank" rel="noopener noreferrer" className="flex items-center mb-2">
              <FaGithub className="w-6 h-6 mr-2" />
              GitHub
            </a>
            <a href="https://www.facebook.com/profile.php?id=100074225503932" target="_blank" rel="noopener noreferrer" className="flex items-center mb-2">
              <FaFacebook className="w-6 h-6 mr-2" />
              Facebook
            </a>
            <a href="https://www.linkedin.com/in/muhamed-hesham-undefined-b94731279/" target="_blank" rel="noopener noreferrer" className="flex items-center mb-2">
              <FaLinkedin className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
            <a href="https://www.upwork.com/freelancers/mohamedh219" target="_blank" rel="noopener noreferrer" className="flex items-center mb-2">
              <FaSquareUpwork className="w-6 h-6 mr-2" />
              Upwork
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
