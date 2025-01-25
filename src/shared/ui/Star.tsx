import images from "assets/images";
import { Image } from "expo-image";
import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Circle,
  G,
} from "react-native-svg";

interface Props {
  size: number;
  pointsData?: number[];
  pointColors?: string[];
  pointContents?: React.ReactNode[];
}

const Star = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={images.bigStar}
        style={{
          width: 44,
          height: 44,
          transform: [{ translateX: 4 }, { translateY: -8 }],
        }}
      />
    </View>
  );
};

const StarWithRoundedEdges: React.FC<Props> = ({
  size = 130,
  pointsData = [100, 100, 100, 100, 100],
  pointColors = ["#F0CA89", "#F0CA89", "#F0CA89", "#F0CA89", "#F0CA89"],
  pointContents = [
    <View className="relative">
      <Star />
    </View>,
    <View className="relative">
      <Star />
    </View>,
    <View className="relative">
      <Star />
    </View>,
    <View className="relative">
      <Star />
    </View>,
    <View className="relative">
      <Star />
    </View>,
  ],
}) => {
  const points = 5; // Количество углов звезды
  const outerRadius = size / 2;
  const innerRadius = outerRadius / 1.8;
  const padding = 20; // Отступы вокруг звезды
  const centerX = outerRadius + padding;
  const centerY = outerRadius + padding;

  const createStarPath = () => {
    let path = "";
    const angleStep = (Math.PI * 2) / points;

    for (let i = 0; i < points; i++) {
      const outerAngle = i * angleStep;
      const innerAngle = outerAngle + angleStep / 2;

      const outerX = centerX + outerRadius * Math.sin(outerAngle);
      const outerY = centerY - outerRadius * Math.cos(outerAngle);
      const innerX = centerX + innerRadius * Math.sin(innerAngle);
      const innerY = centerY - innerRadius * Math.cos(innerAngle);

      if (i === 0) {
        path += `M ${outerX} ${outerY}`;
      } else {
        path += ` L ${outerX} ${outerY}`;
      }
      path += ` L ${innerX} ${innerY}`;
    }

    path += " Z"; // Замыкаем путь
    return path;
  };

  const createDashedLines = () => {
    const lines = [];
    const angleStep = (Math.PI * 2) / points;

    for (let i = 0; i < points; i++) {
      const outerAngle = i * angleStep;
      const outerX = centerX + outerRadius * Math.sin(outerAngle);
      const outerY = centerY - outerRadius * Math.cos(outerAngle);

      lines.push(
        <Path
          key={i}
          d={`M ${outerX} ${outerY} L ${centerX} ${centerY}`}
          stroke="white"
          strokeWidth={2}
          strokeDasharray="5,5"
        />
      );
    }

    return lines;
  };

  const createPoints = () => {
    const pointsElements = [];
    const angleStep = (Math.PI * 2) / points;

    for (let i = 0; i < points; i++) {
      const outerAngle = i * angleStep;
      const value = pointsData[i] || 0; // Значение для текущей точки
      const distance = (outerRadius * value) / 100; // Расстояние от центра в зависимости от значения

      const pointX = centerX + distance * Math.sin(outerAngle);
      const pointY = centerY - distance * Math.cos(outerAngle);

      pointsElements.push(
        <View
          key={i}
          style={[
            styles.pointContainer,
            {
              left: pointX - 7.5, // Центрируем элемент по горизонтали
              top: pointY - 7.5, // Центрируем элемент по вертикали
            },
          ]}
        >
          <Svg width={15} height={15}>
            <Circle
              cx={7.5}
              cy={7.5}
              r={7.5} // Радиус точки
              fill={pointColors[i] || "white"} // Цвет точки
            />
          </Svg>
          {pointContents[i]}
        </View>
      );
    }

    return pointsElements;
  };

  return (
    <View
      style={[
        styles.container,
        { width: size + padding * 2, height: size + padding * 2 },
      ]}
    >
      <Svg width={size + padding * 2} height={size + padding * 2}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#503463" stopOpacity="1" />
            <Stop offset="25%" stopColor="#7588B5" stopOpacity="1" />
            <Stop offset="75%" stopColor="#D7A0A3" stopOpacity="1" />
            <Stop offset="100%" stopColor="#ECC9BC" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Path
          d={createStarPath()}
          fill="none" // Убираем заливку
          stroke="url(#grad)"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round" // Добавляем закругление углов
        />
        {createDashedLines()}
      </Svg>
      {createPoints()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  pointContainer: {
    position: "absolute",
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StarWithRoundedEdges;
