import Link from 'next/link';
import React from 'react';


const BlogsPage = () => {
    return (
        <div className='grid grid-cols-5 gap-5'>
            {
                phones.map((phone) => (<div key={phone.slug} className='border-2 bg-sky-50 p-2 text-center space-y-2'>
                    <h1 className='font-bold text-lg'>{phone.title}</h1>
                    <p>{phone.description}</p>
                    <button className='border px-2 rounded-lg bg-sky-600 text-white hover:bg-sky-500'>
                        <Link href={'/blogs'}>View Details</Link>
                    </button>
                </div>))
            }
        </div>
    );
};


const phones = [
    {
        "slug": "apple-iphone-14-pro-max",
        "title": "Apple iPhone 14 Pro Max",
        "description": "The Apple iPhone 14 Pro Max offers a 6.7-inch Super Retina XDR display, A16 Bionic chip, and a powerful triple-camera system."
    },
    {
        "slug": "samsung-galaxy-s23-ultra",
        "title": "Samsung Galaxy S23 Ultra",
        "description": "Samsung Galaxy S23 Ultra features a 6.8-inch Dynamic AMOLED 2X display, Snapdragon 8 Gen 2, and a 200MP quad-camera setup."
    },
    {
        "slug": "google-pixel-8-pro",
        "title": "Google Pixel 8 Pro",
        "description": "Google Pixel 8 Pro comes with a 6.7-inch OLED display, Tensor G3 chip, and an exceptional AI-powered camera system."
    },
    {
        "slug": "oneplus-11-5g",
        "title": "OnePlus 11 5G",
        "description": "The OnePlus 11 5G delivers flagship performance with Snapdragon 8 Gen 2, a 120Hz AMOLED display, and Hasselblad-tuned cameras."
    },
    {
        "slug": "xiaomi-mi-13-pro",
        "title": "Xiaomi Mi 13 Pro",
        "description": "Xiaomi Mi 13 Pro boasts a 6.73-inch AMOLED display, Snapdragon 8 Gen 2 processor, and a 50MP Leica-tuned triple camera."
    },
    {
        "slug": "sony-xperia-1-v",
        "title": "Sony Xperia 1 V",
        "description": "Sony Xperia 1 V offers a 6.5-inch 4K OLED display, Snapdragon 8 Gen 2, and advanced photography features for professionals."
    },
    {
        "slug": "motorola-edge-40-pro",
        "title": "Motorola Edge 40 Pro",
        "description": "Motorola Edge 40 Pro includes a 6.67-inch AMOLED display, Snapdragon 8 Gen 2, and a 50MP triple-camera setup."
    },
    {
        "slug": "asus-rog-phone-7-ultimate",
        "title": "Asus ROG Phone 7 Ultimate",
        "description": "Asus ROG Phone 7 Ultimate is a gaming beast with a 6.78-inch AMOLED display, Snapdragon 8 Gen 2, and advanced cooling technology."
    },
    {
        "slug": "oppo-find-x6-pro",
        "title": "Oppo Find X6 Pro",
        "description": "Oppo Find X6 Pro features a 6.82-inch AMOLED display, Dimensity 9000 chip, and a 50MP triple-camera setup with a MariSilicon X NPU."
    },
    {
        "slug": "vivo-x90-pro",
        "title": "Vivo X90 Pro",
        "description": "Vivo X90 Pro offers a 6.78-inch AMOLED display, Dimensity 9200 chip, and a 50MP triple-camera system co-engineered with Zeiss."
    },
    {
        "slug": "realme-gt-neo-5",
        "title": "Realme GT Neo 5",
        "description": "Realme GT Neo 5 brings a 6.74-inch AMOLED display, Snapdragon 8+ Gen 1, and 240W fast charging with a 50MP primary camera."
    },
    {
        "slug": "honor-magic5-pro",
        "title": "Honor Magic5 Pro",
        "description": "Honor Magic5 Pro offers a 6.81-inch OLED display, Snapdragon 8 Gen 2, and an AI-powered triple-camera system for advanced photography."
    },
    {
        "slug": "nokia-xr21",
        "title": "Nokia XR21",
        "description": "Nokia XR21 is a rugged smartphone with a 6.49-inch IPS display, Snapdragon 695, and military-grade durability for tough environments."
    },
    {
        "slug": "zte-axon-40-ultra",
        "title": "ZTE Axon 40 Ultra",
        "description": "ZTE Axon 40 Ultra comes with a 6.8-inch AMOLED display, Snapdragon 8 Gen 1, and a 64MP triple-camera system for stunning photography."
    },
    {
        "slug": "infinix-zero-ultra",
        "title": "Infinix Zero Ultra",
        "description": "Infinix Zero Ultra features a 6.8-inch AMOLED display, Dimensity 920 chip, and a 200MP camera for capturing ultra-detailed photos."
    }
]

export default BlogsPage;