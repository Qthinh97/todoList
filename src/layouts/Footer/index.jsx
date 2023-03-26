import { Button } from "antd";
import { useDispatch } from "react-redux";
import * as S from "./styles";

function Footer() {
  const dispatch = useDispatch();

  const handleChangeTheme = (theme) => {
    dispatch({
      type: "CHANGE_THEME",
      payload: theme,
    });
  };

  return (
    <S.FooterWrapper>
      Footer
      <div>
        <Button
          onClick={() => {
            handleChangeTheme("light");
          }}
        >
          Light
        </Button>
        <Button
          onClick={() => {
            handleChangeTheme("dark");
          }}
        >
          Dark
        </Button>
      </div>
    </S.FooterWrapper>
  );
}

export default Footer;
