import { Facebook, Twitter, Youtube } from 'lucide-react';

const SocialMedia = () => {
  return (
    <div className="w-full flex justify-center items-center my-14">
      <div className="w-full flex justify-center gap-8">
        {/* Facebook */}
        <a 
          href="https://www.facebook.com/people/Silent-Scream-2/61566541535880/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-sm bg-white text-black flex justify-center items-center transform transition-transform duration-100 hover:scale-125 hover:text-silent2_red"
        >
          <Facebook size={40} />
        </a>

        {/* Youtube */}
        <a 
          href="https://www.youtube.com/@SilentScream2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-sm bg-white text-black flex justify-center items-center transform transition-transform duration-100 hover:scale-125 hover:text-silent2_red"
        >
          <Youtube size={40} />
        </a>

        {/* Twitter */}
        <a 
          href="https://x.com/SilentScreeeam" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-sm bg-white text-black flex justify-center items-center transform transition-transform duration-100 hover:scale-125 hover:text-silent2_red"
        >
          <Twitter size={40} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
