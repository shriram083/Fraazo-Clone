import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import DownloadApp from "../components/DownloadApp";
import ImageSlider from "../components/ImageSlider";
const sliderImg = [
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3763.png", id: 3763 },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3765.png", id: 3765  },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3766.png", id: 3766  },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3767.png", id: 3767  },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3768.png", id: 3768 },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3770.png", id: 3770  },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3671.png", id: 3771 },
];
const Home = () => {
  return (
    <Box>
      <Box p={"0 40px"}>
        <Flex gap={7}>
          <Box w="65%" color="white">
            <ImageSlider key={sliderImg.id} slides={sliderImg} />
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
          <Text fontSize={"3xl"} textAlign={"left"}>
            BEST DEALS
          </Text>
          <hr />
          <br />
        </Box>
        <Box>
          <Flex gap={10}>
            <Stack>
              <Image src="https://images.fraazo.com/fraazo-prod/web/298.png" />
            </Stack>
            <Stack>
              <Image src="https://images.fraazo.com/fraazo-master/webban/Fruits.png" />
            </Stack>
            <Stack>
              <Image src="https://images.fraazo.com/fraazo-master/webban/Vegetables.png" />
            </Stack>
            <Stack>
              <Image src="https://images.fraazo.com/fraazo-prod/web/201.png" />
            </Stack>
          </Flex>
        </Box>
        <Box mt={10}></Box>
      </Box>
      <Box>
        <DownloadApp />
      </Box>
      
    </Box>
  );
};

export default Home;
