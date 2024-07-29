interface Props {
  url: string;
  imgSrc: string;
  altText: string;
}

const SocialBtn = ({ url, imgSrc, altText }: Props) => {
  return (
    <button
      type="button"
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
    >
      <img src={imgSrc} alt={altText} width="20" height="20" />
    </button>
  );
};

export default SocialBtn;
