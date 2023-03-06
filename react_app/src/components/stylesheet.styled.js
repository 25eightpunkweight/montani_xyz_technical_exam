import styled from 'styled-components';
import BannerImage from '../assets/xyz_assets/Assets/MaskGroup4.png';
import BannerBg from '../assets/xyz_assets/Assets/banner_bg.png';
import ChatIcon from '../assets/xyz_assets/Assets/Path-335.svg';
import { Alert, Container, Card, Row, Accordion, Dropdown } from 'react-bootstrap';
import logoFacebook from '../assets/xyz_assets/Assets/logo-facebook.svg';
import logoTwitter from '../assets/xyz_assets/Assets/logo-twitter.svg';
import logoLinkedIn from '../assets/xyz_assets/Assets/logo-linkedin.svg';


const ComponentStyle = styled.div``

const BannerMessage = styled(Alert)`
    text-align: center;
    background-image: url(${BannerImage});
    background-size: 100% 100%;
    color: white;
    background-size: contain;
    background-repeat: no-repeat;
`

const LandingContainer = styled(Container)`
    width: auto;
    background-image: url(${BannerBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: auto;
    padding-top: 30px;
`

const LandingSubContainer = styled(Container)`
    width: 60vw;
`

const AnotherHomeContainer = styled(Container)`
    background-image: linear-gradient(174deg, #ffffff 35%, #061a36 35%, #061a36 75%, #ffffff 75%, #ffffff 100%);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: auto;
    padding-top: 30px;
`

const TestimonialCardImg = styled(Card.Img)`
    width: 10% !important;
    height: 100%;
    margin: 0 auto;
`

const BusinessPitchCardImg = styled(Card.Img)`
    width: 20% !important;
    height: 100%;
    margin: 0 auto;
`


const CenteredAccordion = styled(Accordion)`
    width: 60%;
    margin: 0 auto;
    text-align: left;
`

const FAQsContainer = styled(Container)`
    background-color: #f2f5f8;
`

const FooterContainer = styled(Container)`
    width: 80vw;
`

const rowSectionSubStyle = {
    padding: '30px 0'
}

const columnCenteredText = {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center'
}

const ChatButton = styled.div`
    width: 70px;
    height: 70px;
    background: url(${ChatIcon}) #5fd2fa;
    background-size: 65% 65%;
    background-repeat: no-repeat;
    background-position: center;
    -moz-border-radius: 35px;
    -webkit-border-radius: 35px;
    border-radius: 35px;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
`

const SocialsLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const SectionRow = styled(Row)`
    text-align: ${props => {return props.text_align}};
`;

const SocialsLink = styled.div`
    width: 50px;
    height: 50px;
    background: url(${
                        props => {
                            if (props.link == "facebook"){
                                return logoFacebook;
                            }
                            if (props.link == "twitter"){
                                return logoTwitter;
                            }
                            if (props.link == "linkedin"){
                                return logoLinkedIn;
                            }
                        }
                    }) 
        #f2f2ff;
    background-size: 60% 60%;
    background-repeat: no-repeat;
    background-position: center;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    border-radius: 25px;
`

const ClearDropdownButton = styled(Dropdown.Toggle)`
    border: none;
    background-color: rgba(1, 2, 3, 0) !important;
    color: grey;
    --bs-btn-hover-color: black;
    --bs-btn-active-color: grey;
`

const Styled = { 
    ComponentStyle,
    BannerMessage,
    LandingContainer,
    AnotherHomeContainer,
    TestimonialCardImg,
    CenteredAccordion,
    FAQsContainer,
    LandingSubContainer,
    FooterContainer,
    ChatButton,
    SocialsLinksContainer,
    SocialsLink,
    SectionRow,
    BusinessPitchCardImg,
    ClearDropdownButton,
    // below are in-line styles
    rowSectionSubStyle,
    columnCenteredText,
}

export default Styled;