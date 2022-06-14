import { Box, Container, Flex, Image, Heading,Text } from "@chakra-ui/react";
import React from "react";
import ImageSlider from "../components/ImageSlider";
const sliderImg = [
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3763.png" },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3765.png" },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3766.png" },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3767.png" },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3768.png" },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3770.png" },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3671.png" },
];
const Home = () => {
  return (
    <Box p={"0 40px"}>
      <Flex gap={7}>
        <Box w="65%" color="white">
          <ImageSlider slides={sliderImg} />
        </Box>
        <Box w="33%">
          <Flex flexDir={"column"} gap={4}>
            <Box>
              <Image
                w={"100%"}
                maxH={"90px"}
                src="https://fraazo.com/static/Web1-cafcda6bf22c11e6bbaed467d13a0eb7.png"
              />
            </Box>
            <Box>
              <Image
                w={"100%"}
                maxH={"90px"}
                src="https://fraazo.com/static/Web2-9a152d86240414d76ce205c491e47c4e.png"
              />
            </Box>
            <Box>
              <Image
                w={"100%"}
                maxH={"90px"}
                src="https://fraazo.com/static/Web3-9f5a46f22ff99bcfe079257218356413.png"
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box>
        <Text fontSize={'3xl'} textAlign={"left"}>BEST DEALS</Text>
        <hr />
        <br />
        
      </Box>
    </Box>
  );
};

export default Home;
