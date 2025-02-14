import { FooterWrapper, TextCover, Box } from "./FooterStyled"

const Footer = () => {
    return(
        <FooterWrapper>
            <Box>
                <TextCover>Company</TextCover>
                <TextCover>About us</TextCover>
                <TextCover>Our services</TextCover>
            </Box>
            <Box>
                <TextCover>Get help</TextCover>
                <TextCover>FAQ</TextCover>
                <TextCover>Address</TextCover>
            </Box>
        </FooterWrapper>
    )
}
export default Footer