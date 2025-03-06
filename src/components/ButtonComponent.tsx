type ButtonType = "submit" | "reset" | "button" | undefined;

interface ButtonProps {
  type: ButtonType;
  action?: React.MouseEventHandler;
  title: string;
  disable?: boolean;
}

const ButtonComponent = ({
  type,
  action = () => {},
  title,
  disable = false,
}: ButtonProps) => {
  return (
    <button type={type} onClick={action} disabled={disable}>
      {title}
    </button>
  );
};
export default ButtonComponent;
