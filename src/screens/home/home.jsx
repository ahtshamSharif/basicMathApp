import { View, Text, Image, FlatList, StyleSheet } from "react-native";

function Home() {
  const firstImage = require("../../../assets/images/a.jpg");
  const secondImage = require("../../../assets/images/b.jpg");
  const thirdImage = require("../../../assets/images/c.jpg");
  const fourthImage = require("../../../assets/images/x.jpg");
  const fifthImage = require("../../../assets/images/y.jpg");
  const sixthImage = require("../../../assets/images/z.jpg");

  const videoData = [
    {
      title: "9th Physics Chapter 1 Numericals",
      videoNumber: "Part-1",
      photo: firstImage,
    },
    {
      title: "9th Physics Chapter 1 Numericals",
      videoNumber: "Part-2",
      photo: secondImage,
    },
    {
      title: "9th Physics Chapter 2 Numericals",
      videoNumber: "Part-1",
      photo: thirdImage,
    },
    {
      title: "10th Physics Chapter 10 Numericals",
      videoNumber: "Part-2",
      photo: fourthImage,
    },
    {
      title: "10th Physics Chapter 11 Numericals",
      videoNumber: "Part-1",
      photo: fifthImage,
    },
    {
      title: "10th Physics Chapter 11 Numericals",
      videoNumber: "Part-2",
      photo: sixthImage,
    },
  ];

  const _rederItem = ({ item }) => (
    <View style={{ padding: 5, margin: 2 }}>
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            backgroundColor: "#3aafa9",
            color: "white",
          }}
        >
          {item.title}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "700", alignSelf: "center" }}>
          {item.videoNumber}
        </Text>
      </View>
      <Image
        source={item.photo}
        resizeMode={"center"}
        style={{ width: "100%", height: 200, alignSelf: "center" }}
      />
    </View>
  );

  return (
    <View>
      <FlatList
        data={videoData}
        renderItem={_rederItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
export default Home;
