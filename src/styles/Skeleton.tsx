import React from "react";
import { styled } from "styled-components";

const ToDoSkeletonUnit = () => {
  return <UnitLayout />;
};

const Skeleton = () => {
  return (
    <Layout>
      <ToDoSkeletonUnit />
      <ToDoSkeletonUnit />
      <ToDoSkeletonUnit />
    </Layout>
  );
};

export default Skeleton;

const UnitLayout = styled.div`
  position: relative;
  width: 100%;
  height: 130px;
  background-color: var(--bg);
  border-radius: 10px;
  overflow: hidden;

  @keyframes light {
    0% {
      background-color: rgba(98, 98, 98, 0.1);
    }
    50% {
      background-color: rgba(136, 136, 136, 0.1);
    }
    100% {
      background-color: rgba(98, 98, 98, 0.1);
    }
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: light 1.5s infinite ease-in-out;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;
