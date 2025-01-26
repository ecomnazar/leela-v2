import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Svg, { G, Path, Text } from "react-native-svg";

interface Props {
  size?: number;
  innerRadius?: number;
  labels?: string[];
  activeIndex?: number;
}

const RadarChart: React.FC<Props> = ({
  size = 320,
  innerRadius = 85,
  labels = ["САМОЦЕННОСТЬ", "СЕМЬЯ", "ЗДОРОВЬЕ", "РЕАЛИЗАЦИЯ", "ДЕНЬГИ"],
  activeIndex = 1,
}) => {
  const radius = size / 2;
  const centerX = radius;
  const centerY = radius;
  const angleStep = (Math.PI * 2) / labels.length;
  const colors = ["#635E9B", "#7994BA", "#EFD1C4", "#8E5A7B", "#B88091"];

  const createRadarSections = () => {
    const sections = [];
    let activeSection = null;

    for (let i = 0; i < labels.length; i++) {
      // const isActive = i === activeIndex;
      const sectionRadius = radius;
      const sectionCenterY = centerY;

      const startAngle = i * angleStep + Math.PI;
      const endAngle = (i + 1) * angleStep + Math.PI;
      const x1 = centerX + sectionRadius * Math.sin(startAngle);
      const y1 = sectionCenterY - sectionRadius * Math.cos(startAngle);
      const x2 = centerX + sectionRadius * Math.sin(endAngle);
      const y2 = sectionCenterY - sectionRadius * Math.cos(endAngle);

      const scaleFactor = 0;

      const section = (
        <G key={i}>
          <Path
            d={`M ${centerX} ${sectionCenterY} L ${x1} ${y1} A ${sectionRadius} ${sectionRadius} 0 0 1 ${x2} ${y2} Z`}
            fill={colors[i]}
          />
          <Text
            x={
              centerX +
              (sectionRadius - 40) * Math.sin((startAngle + endAngle) / 2)
            }
            y={
              sectionCenterY -
              (sectionRadius - 40) * Math.cos((startAngle + endAngle) / 2)
            }
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize={11}
            fill={"#FFF"}
          >
            {labels[i]}
          </Text>
        </G>
      );

      sections.push(section);
    }

    if (activeSection) {
      sections.push(activeSection);
    }

    return sections;
  };

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} style={{ overflow: "visible" }}>
        {createRadarSections()}
      </Svg>
      <View
        style={[
          styles.centerContainer,
          {
            width: innerRadius * 2 * 0.9,
            height: innerRadius * 2 * 0.9,
            borderRadius: innerRadius,
          },
        ]}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  centerContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
  },
});

export default RadarChart;
