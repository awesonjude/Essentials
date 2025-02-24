import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Text>MEET AN ARTISAN - CALL </Text>

          <Icon>
            <MdCall />
          </Icon>
          <Number>+2348000000000</Number>
        </Section>
        <Box>
          <Sub>
            <List>Home for Sale</List>
            <List>Open Houses</List>
            <List>Virtual Tours</List>
            <List>Recently Reduced</List>
            <List>Apartments for Rent</List>
          </Sub>

          <Sub>
            <List>Sell your home</List>
            <List>No Obligation Cash Offer</List>
            <List>Get A Home Valuation</List>
            <List>Mortgage Calculator</List>
          </Sub>

          <Sub>
            <List>Agent Directory</List>
            <List>Join Agent Network</List>
            <List>Jobs</List>
          </Sub>

          <Sub>
            <List>Saved Homes</List>
            <List>Saved Searches</List>
            <List>Manage Your Profile</List>
            <List>Settings</List>
            <List>Sign In</List>
          </Sub>
          <Sub>
            <List>About</List>
            <List>FAQs</List>
            <List>Contact Us</List>
            <List>Press</List>
            <List>Sitemap</List>
            <List>Rental Sitemap</List>
          </Sub>

          <Sub>
            <List>Create Account</List>
            <List>Help Center</List>
            <List>Blog</List>
            <List>Guide</List>
            <List>App</List>
          </Sub>
        </Box>
        <Last>
          <Icon>
            <FaFacebook />
          </Icon>
          <Icon>
            <AiFillTwitterCircle />
          </Icon>
          <Icon>
            <FaInstagramSquare />
          </Icon>
          <Icon>
            <BsLinkedin />
          </Icon>

          <Nav>
            <Icon>
              <MdOutlineMail />
            </Icon>
          </Nav>

          <Nav>Contact Us</Nav>

          <Nav>About</Nav>
          <Call>
            <Icon>
              <MdCall />
            </Icon>
            <Number>+2348000000000</Number>
          </Call>
        </Last>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Nav = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  color: black;

`;

const Container = styled.div``;
const Wrapper = styled.div`
  display: block;
`;

const Section = styled.div`
  align-items: center;
  margin-bottom: 10px;
  display: flex;
  display-flex: wrap;
  justify-content: center;
`;
const Sub = styled.div`
  flex-direction: column;
  display: flex;
  line-height: 35px;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-top: 5px;
  padding-left: 25px;
  margin-right: 10px;
`;

const Call = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;
const Icon = styled.div`
  width: 30px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 40px;
`;
const Last = styled.div`
  justify-content: space-between;
  align-items: center;
  padding-left: 60px;
  padding-right: 100px;
  display: flex;
  // display-flex: wrap;
  // justify-content: center;
`;
const List = styled.div`
  flex-direction: flex;
  text-weight: bold;
`;
const Box = styled.div`
  // width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: #387546;
  padding-left: 100px;
  padding-right: 140px;

  color: white;
  // font-weight: bold;
`;

const Number = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-left: 10px;
`;
