import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import gql from "graphql-tag";
import { useMutation } from "react-apollo";

const StyledText = styled(Text)`
  font-size: 25px;
  margin: 10px;
  font-weight: 700;
  text-align: center;
`;

const Button = styled(Text)`
  margin: 20px;
  padding: 10px 30px;
  background: black;
  color: white;
  font-size: 30px;
`;

const playMutation = gql`
  mutation updatePlayBackControls(
    $sourceIndex: Int
    $isPause: Boolean
    $isPlay: Boolean
    $volumeRange: String
  ) {
    updatePlaybackControl(
      data: {
        sourceIndex: $sourceIndex
        isPlay: $isPlay
        isPause: $isPause
        volumeRange: $volumeRange
      }
      where: { id: 1 }
    ) {
      id
      volumeRange
      sourceIndex
    }
  }
`;

const initialState = {
  sourceIndex: 0,
  isPlay: true,
  isPause: false,
  volumeRange: "0.5"
};

const Remote = () => {
  const [playBackConfig, setConfig] = useState(initialState);
  const [update, { data }] = useMutation(playMutation);

  useEffect(() => {
    update({
      variables: {
        ...playBackConfig
      }
    });
  }, [playBackConfig]);

  const play = () => {
    setConfig({
      ...playBackConfig,
      isPause: false,
      isPlay: true
    });
  };

  const pause = () => {
    setConfig({
      ...playBackConfig,
      isPause: true,
      isPlay: false
    });
  };

  const next = () => {
    setConfig({
      ...playBackConfig,
      sourceIndex:
        playBackConfig.sourceIndex + 1 <= 4 ? playBackConfig.sourceIndex + 1 : 4
    });
  };

  const prev = () => {
    setConfig({
      ...playBackConfig,
      sourceIndex:
        playBackConfig.sourceIndex - 1 >= 0 ? playBackConfig.sourceIndex - 1 : 0
    });
  };

  const volumePlus = () => {
    const currentVolume = Number(playBackConfig.volumeRange);
    setConfig({
      ...playBackConfig,
      volumeRange: `${currentVolume + 0.1 <= 1 ? currentVolume + 0.1 : 1}`
    });
  };

  const volumeDown = () => {
    const currentVolume = Number(playBackConfig.volumeRange);
    setConfig({
      ...playBackConfig,
      volumeRange: `${currentVolume - 0.1 >= 0 ? currentVolume - 0.1 : 0}`
    });
  };

  return (
    <View>
      <View>
        <TouchableOpacity onPress={play}>
          <StyledText style={{ color: "green" }}>Play</StyledText>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={pause}>
          <StyledText style={{ color: "red" }}>Pause</StyledText>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <TouchableOpacity onPress={prev}>
          <StyledText style={{ color: "blue" }}> {`<- Prev`}</StyledText>
        </TouchableOpacity>
        <TouchableOpacity onPress={next}>
          <StyledText style={{ color: "blue" }}> Next -></StyledText>
        </TouchableOpacity>
      </View>
      <StyledText>Volume</StyledText>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TouchableOpacity onPress={volumePlus}>
          <Button>+</Button>
        </TouchableOpacity>
        <TouchableOpacity onPress={volumeDown}>
          <Button>-</Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Remote;
