import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import PostListItem from "@/src/components/PostListItem";
import posts from "@/assets/data/posts.json";

const FeedScreen = () => {
  console.log("OSSSS____", Platform.OS);
  const classNames = Platform.OS === "web" ? "items-center" : "";
  return (
    <FlatList
      data={posts}
      className={classNames}
      contentContainerStyle={{
        gap: 10,
        maxWidth: 512,
        width: "100%",
      }}
      renderItem={({ item }) => <PostListItem post={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
