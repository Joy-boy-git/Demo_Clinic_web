import './Home';
import './About';
import './Services';
import './Contact';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="container mx-auto text-center mb-4">
                <h2 className="text-lg font-semibold">Contact Us</h2>
                <p className="text-sm"> 123 Medical Street, Chennai, Tamil Nadu - 600001</p>
                <br />
                <p className="text-sm">Phone: +91 98765 43210 | Email: info@starclinic.com</p>
            </div>
            <div className="container mx-auto text-center mb-4">
                <h2 className="text-lg font-semibold">Follow Us</h2>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-6 h-6" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-6 h-6" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" className="w-12 h-6" />
                    </a>
                </div>
            </div>
            <div className="container mx-auto text-center mb-4">
                <h2 className="text-lg font-semibold">Quick Links</h2>
                <ul className="flex flex-col items-center space-y-2 mt-2">
                    <li><a href="/Home" className="text-sm hover:text-blue-400">Home</a></li>
                    <li><a href="/About" className="text-sm hover:text-blue-400">About Us</a></li>
                    <li><a href="/Services" className="text-sm hover:text-blue-400">Services</a></li>
                    <li><a href="/Contact" className="text-sm hover:text-blue-400">Contact</a></li>
                </ul>
            </div>
            <div className="container mx-auto text-center mb-4">
                <h2 className="text-lg font-semibold">Operating Hours</h2>
                <p className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-sm">Sunday: Closed</p>
            </div>
        
            <hr className="border-gray-700 my-4" />
            </div>
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} STAR Clinic. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;