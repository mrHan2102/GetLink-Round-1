import styled from "@emotion/styled";
import { Select, Input } from "antd";

export const WrapperIntro = styled.div`
  background-color: #5cb85c;
  width: 100vw;
  margin-top: 0px;
  height: 160px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 12px;
  box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3),
    inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
`;

export const WrapperBody = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const SelectStyled = styled(Select)`
  && .ant-select-selector {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  width: 100px;
  height: 50px;
`;

export const InputStyled = styled(Input)`
  width: 200px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
