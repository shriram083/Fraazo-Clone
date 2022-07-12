import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  Text,
  Stack,
  Divider,
  useToast,
  Skeleton,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DownloadApp from "../components/DownloadApp";
import ImageSlider from "../components/ImageSlider";
import ProductsSlider from "../components/SlidingComponent/ProductsSlider";
import sideOne from "../assets/homepage/sideOne.png";
import sideTwo from "../assets/homepage/sideTwo.png";
import sideThree from "../assets/homepage/sideThree.png";
import mangoess from "../assets/homepage/mangoes.webp";
import Fruits from "../assets/homepage/Fruits.webp";
import Vegetables from "../assets/homepage/Vegetables.webp";
import dryFruits from "../assets/homepage/dryFruits.webp";
import {
  getBestDealsAPI,
  getCombosFruitsAPI,
  getDailyVegetablesAPI,
  getDryFruitsAPI,
  getExoticFruitsAPI,
  getFreshFruitsAPI,
  getMangoesAPI,
} from "../store/products/products.actions";
const sliderImg = [
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3763.png", id: 3763 },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3765.png", id: 3765 },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3766.png", id: 3766 },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3767.png", id: 3767 },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3768.png", id: 3768 },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3770.png", id: 3770 },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3671.png", id: 3771 },
  { img: "https://images.fraazo.com/fraazo-prod/web_ban/3945.png", id: 3945 },
];
const Home = () => {
  const dispatch = useDispatch();

  const {
    mangoes,
    freshFruits,
    dailyVeggies,
    premiumQualityDryFruits,
    bestDeals,
  } = useSelector((state) => state.products);
  // console.log(premiumQualityDryFruits.data);

  useEffect(() => {
    if (mangoes?.data?.length === 0) {
      dispatch(getMangoesAPI());
    }
    if (freshFruits?.data?.length === 0) {
      dispatch(getFreshFruitsAPI());
    }

    if (dailyVeggies?.data?.length === 0) {
      dispatch(getDailyVegetablesAPI());
    }

    if (premiumQualityDryFruits?.data?.length === 0) {
      dispatch(getDryFruitsAPI());
    }
    if (bestDeals?.data?.length === 0) {
      dispatch(getBestDealsAPI());
    }
  }, [dispatch]);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Box>
      <Box p={"0 60px"}>
        <Flex gap={7}>
          <Box w="65%" color="white">
            {/* <ImageSlider key={sliderImg.id} slides={sliderImg} /> */}
            <ImageSlider key={sliderImg.id} />
          </Box>
          <Box w="33%">
            <Flex flexDir={"column"} gap={4}>
              <Box>
                <Image w={"100%"} maxH={"90px"} src={sideOne} />
              </Box>
              <Box>
                <Image w={"100%"} maxH={"90px"} src={sideTwo} />
              </Box>
              <Box>
                <Image w={"100%"} maxH={"90px"} src={sideThree} />
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Box mt={"10px"}>
          <Text fontSize={"3xl"} textAlign={"left"} fontWeight={300}>
            BEST DEALS
          </Text>
          <Divider color={"#ccc"} />

          <ProductsSlider data={bestDeals?.data} loading={bestDeals?.loading} />
        </Box>
        <Box mt={"50px"}>
          <Flex gap={10}>
            <Stack>
              <Link to={`/products/mangoes/mangoes`}>
                <Image src={mangoess} />
              </Link>
            </Stack>
            <Stack>
              <Link to={`products/fruits/fresh-fruits`}>
                <Image src={Fruits} />
              </Link>
            </Stack>
            <Stack>
              <Link to={`products/vegetables/daily-veggies`}>
                <Image src={Vegetables} />
              </Link>
            </Stack>
            <Stack>
              <Link to={`products/dryfruits/premium-quality-dry-fruits`}>
                <Image src={dryFruits} />
              </Link>
            </Stack>
          </Flex>
        </Box>
        <Box mt={"50px"}>
          <Text fontSize={"3xl"} textAlign={"left"} fontWeight={300}>
            MANGOES
          </Text>
          <Divider color={"#ccc"} />
          <ProductsSlider data={mangoes?.data} loading={mangoes?.loading} />
        </Box>
        <Box mt={"50px"}>
          <Text fontSize={"3xl"} textAlign={"left"} fontWeight={300}>
            FRUITS
          </Text>
          <Divider color={"#ccc"} />
          <ProductsSlider
            data={freshFruits?.data}
            loading={freshFruits?.loading}
          />
        </Box>
        <Box mt={"50px"}>
          <Text fontSize={"3xl"} textAlign={"left"} fontWeight={300}>
            VEGETABLES
          </Text>
          <Divider color={"#ccc"} />
          <ProductsSlider
            data={dailyVeggies?.data}
            loading={dailyVeggies?.loading}
          />
        </Box>
        <Box mt={"50px"}>
          <Text fontSize={"3xl"} textAlign={"left"} fontWeight={300}>
            DRY FRUITS
          </Text>
          <Divider color={"#ccc"} />
          <ProductsSlider
            data={premiumQualityDryFruits?.data}
            loading={premiumQualityDryFruits?.loading}
          />
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
