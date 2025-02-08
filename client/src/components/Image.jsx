import { IKImage } from 'imagekitio-react';


const Image = ({ src, className, h, w, alt }) => {
    if (!src) {
        return null;
    }

    return (
        <IKImage
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            path={src}
            className={className}
            height={h}
            width={w}
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
            alt={alt}
            transformation={[
                {
                  width: w,
                  height: h,
                },
              ]}
            
        />
    )
}

export default Image