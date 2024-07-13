import { Image, Text, View } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import React from "react";

export default function PostListItem({ post }) {
  return (
    <View className="bg-white">
      {/* Header */}

      <View className="p-3 flex-row items-center gap-3">
        <Image
          className="w-12 aspect-square rounded-full"
          source={{ uri: post.user.image_url }}
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>
      <Image source={{ uri: post.image_url }} className="w-full aspect-[4/3]" />
      {/* Icons */}
      <View className="flex-row gap-4 p-3">
        <AntDesign name={"hearto"} size={23} />
        <Ionicons name="chatbubble-outline" size={23} />
        <Feather name="send" size={23} />

        <Feather name="bookmark" size={23} className="ml-auto" />
      </View>
    </View>
  );
}
