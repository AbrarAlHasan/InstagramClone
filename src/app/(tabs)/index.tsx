import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import PostListItem from "@/src/components/PostListItem";
import posts from "@/assets/data/posts.json";

const FeedScreen = () => {
  return (
    <FlatList
      data={posts}
      contentContainerStyle={{ gap: 10, backgroundColor: "white" }}
      renderItem={({ item }) => <PostListItem post={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
