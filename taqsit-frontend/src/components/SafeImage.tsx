import React, { useState } from "react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const SafeImage: React.FC<SafeImageProps> = ({ src, alt = "Image", fallbackSrc = "/placeholder.svg", onError, loading = "lazy", ...rest }) => {
  const [errored, setErrored] = useState(false);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      src={errored ? fallbackSrc : (src || fallbackSrc)}
      alt={alt}
      loading={loading}
      onError={(e) => {
        if (!errored) setErrored(true);
        onError?.(e);
      }}
      {...rest}
    />
  );
};

export default SafeImage;
