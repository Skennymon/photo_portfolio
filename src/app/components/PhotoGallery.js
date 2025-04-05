import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import Image from 'next/image'

function PhotoGallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="flex p-7">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-7"
            >
                <a href="/KennyAuraFarming.jpg">
                    <Image alt="img1" src="/KennyAuraFarming.jpg" width={500} height={500}/>
                </a>
                <a href="/KennyAuraFarming.jpg">
                    <Image alt="img2" src="/KennyAuraFarming.jpg" width={500} height={500}/>
                </a>
                
            </LightGallery>
        </div>
    );
}

export default PhotoGallery;