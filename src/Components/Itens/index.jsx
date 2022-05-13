import React from "react";

import styled from "styled-components";

export const Items = styled.div`
  box-shadow: 4px 4x 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

export default () => {
  return <Items></Items>;
};
