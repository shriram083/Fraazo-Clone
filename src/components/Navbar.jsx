import React from "react";
import styled from "styled-components";
import logo from "./../Fraazo-logo.png";
const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 88px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
`;
const InnerDivFlex = styled.div`
  color: #333333;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  &:hover svg {
    fill: #343940;
  }
`;
const SearchBar = styled.div`
  position: relative;
  border: 1px solid;
  height: 50px;
  display: flex;
  align-items: center;

  border-radius: 24px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  outline: 0;
  font-size: 13px;
  line-height: 18px;
  padding: 14px;
  color: #333333;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  width: 50%;
  & input {
    display: block;
    background-color: #f9f9f9;
    border: none;
    width: 100%;
  }
  & input:focus {
    outline: none;
  }
  & svg {
    position: absolute;
    right: 22px;
    cursor: pointer;
  }
`;
const cartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="#999999"
    viewBox="0 0 24 24"
    stroke="#999999"
    strokeWidth={2}
    height={"16px"}
    width={"16px"}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);
const SearchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#4fbb90"
    strokeWidth={3}
    height={"16px"}
    width={"16px"}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);
const creditIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="#999999"
    height={"16px"}
    width={"16px"}
  >
    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
    <path
      fillRule="evenodd"
      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
      clipRule="evenodd"
    />
  </svg>
);
const userIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="#999999"
    height={"16px"}
    width={"16px"}
  >
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    />
  </svg>
);
const locationSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="#999999"
    height={"16px"}
    width={"16px"}
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);
const Navbar = () => {
  return (
    <Flex>
      <InnerDivFlex>
        <img src={logo} alt="logo" />
      </InnerDivFlex>
      <InnerDivFlex>{locationSvg} powai</InnerDivFlex>
      <SearchBar>
        <input
          type="text"
          placeholder="Find fresh vegetables, fruits and dairy..."
        />
        {SearchIcon}
      </SearchBar>
      <InnerDivFlex>{cartIcon} cart</InnerDivFlex>
      <InnerDivFlex>{creditIcon} credits</InnerDivFlex>
      <InnerDivFlex>{userIcon} name</InnerDivFlex>
    </Flex>
  );
};

export default Navbar;
