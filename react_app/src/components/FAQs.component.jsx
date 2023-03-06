import React from 'react'
import { Accordion, Container, Row } from 'react-bootstrap';

import Styled from './stylesheet.styled'

function FAQs() {
  return (
    <Styled.FAQsContainer>
        <Styled.SectionRow text_align="center" style={Styled.rowSectionSubStyle}>
            <h1>Frequently Asked Questions</h1>
            <Styled.CenteredAccordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Dedicated customer support and help portal</Accordion.Header>
                    <Accordion.Body>
                        with our dedicated customer support team, you can rest easy knowing that we're doing everything we can to save you time, money, and stress
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Styled.CenteredAccordion>
        </Styled.SectionRow>
    </Styled.FAQsContainer>
  );
}

export default FAQs;