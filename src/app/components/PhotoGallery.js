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
        <div className="flex p-7 gap-y-2 w-full">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="columns-1 md:columns-3 lg:columns-6"
            >
                    {photos.map((photo, index) => (
                        <a href={photo.photo} key={index} className="h-fit">
                            <Image alt={photo.name} src={photo.photo} width={500} height={500}/>
                        </a>
                    ))}

            </LightGallery>
        </div>
    );
}

export default PhotoGallery;