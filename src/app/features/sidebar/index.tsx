import { Outlet } from "react-router-dom";
import styled from "styled-components"

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
  `,
  Sidebar: styled.div`
    background-color: #444;
  `,
  Item: styled.div`
    padding: 10px 20px;
    color: white;
  `,
};

const Sidebar: React.FC = () => {
  return <S.Wrapper>
    <S.Sidebar>
      <S.Item>Settings</S.Item>
    </S.Sidebar>
    <Outlet />
  </S.Wrapper>;
};

export default Sidebar;
