import ButtonSvg from "../../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-1 cursor-pointer ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => {
    return (
      <button onClick={onClick} className={classes}>
        <span className={spanClasses}> {children} </span>
        {ButtonSvg(white)}
      </button>
    );
  };

  const renderLink = () => {
    return (
      <a className={classes} href={href}>
        <span className={spanClasses}> {children} </span>
        {ButtonSvg(white)}
      </a>
    );
  };
  return href ? renderLink() : renderButton();
};

export default Button;
