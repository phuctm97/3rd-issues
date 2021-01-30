import classNames from "classnames";
import { useTheme } from "next-themes";
import styles from "./toggle.module.css";

const ToggleDarkMode = ({ className, ...props }) => {
  const { theme, setTheme } = useTheme();
  const onClick = (e) => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      {...props}
      className={classNames(className, styles.toggle)}
      onClick={onClick}
    >
      Toggle Color Mode
    </button>
  );
};

export default ToggleDarkMode;
