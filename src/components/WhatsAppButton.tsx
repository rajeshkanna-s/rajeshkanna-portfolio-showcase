import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/918667454755"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Chat on WhatsApp"
        >
            <div className="relative">
                {/* Pulse ring */}
                <div className="absolute inset-0 bg-green-500 rounded-full animate-whatsapp-pulse opacity-30"></div>

                {/* Button */}
                <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <MessageCircle className="h-7 w-7 text-white" />
                </div>

                {/* Tooltip */}
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
                    Chat with me
                    <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
            </div>
        </a>
    );
};

export default WhatsAppButton;
