import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const CreatePost = () => {
  const [caption, setCaption] = useState("");

  return (
    <View className="p-3 items-center  flex-1">
      {/* Image Picker */}
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
        className="w-52 aspect-[3/4] rounded-lg shadow-md"
      />
      <Text
        className="text-blue-500 font-semibold m-5 text-lg"
        onPress={() => {}}
      >
        Change
      </Text>
      {/* Text Input for Caption */}
      <TextInput
        placeholder="Write a Caption"
        className="w-[100%] p-3"
        value={caption}
        onChangeText={setCaption}
        numberOfLines={100}
        multiline={true}
      />
      {/* Button */}
      <View className="mt-auto w-full">
        <Pressable className="bg-blue-500 w-full p-3 items-center rounded-md">
          <Text className="text-white font-semibold">Share</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({});
