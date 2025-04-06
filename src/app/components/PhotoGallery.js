import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import Image from 'next/image'

function PhotoGallery({ photos }) {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    //grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2
    return (
        <div className="flex p-7">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="columns-1 md:columns-3 lg:columns-6 gap-4"
            >
                    {photos.map((photo, index) => (
                        <a href={photo.photo} key={index} className="h-fit p-1">
                            <Image alt={photo.name} src={photo.photo} width={500} height={500} className="transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110"/>
                        </a>
                    ))}

            </LightGallery>
        </div>
    );
}

export default PhotoGallery;