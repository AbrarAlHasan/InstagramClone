import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useFocusEffect } from "expo-router";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");

  useFocusEffect(
    useCallback(() => {
      if (!image) {
        pickImage();
      }
      return setImage("");
    }, [])
  );

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className=" items-center  flex-1">
      {/* Image Picker */}
      {image ? (
        <Image
          source={{
            uri: image,
          }}
          className="w-full aspect-[4/3] shadow-md bg-gray-300"
        />
      ) : (
        <View className="w-full aspect-[4/3]  bg-gray-300" />
      )}
      <Pressable
        onPress={() => {
          pickImage();
        }}
      >
        <Text className="text-blue-500 font-semibold m-5 text-lg">
          {image ? "Change Image" : "Select Image"}
        </Text>
      </Pressable>
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
      <View className="mt-auto w-full px-3 ">
        <Pressable className="bg-blue-500 w-full p-3 items-center rounded-md">
          <Text className="text-white font-semibold">Share</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({});
