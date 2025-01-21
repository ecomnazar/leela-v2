import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, G, Text } from "react-native-svg";

interface Props {
  size: number;
  innerRadius: number;
  labels?: string[];
  activeIndex?: number | null;
}

const RadarChart: React.FC<Props> = ({
  size = 320, // Увеличиваем размер SVG
  innerRadius = 85,
  labels = ["A", "B", "C", "D", "E"],
  activeIndex = null,
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
      const isActive = false;
      //   const isActive = i === activeIndex;
      const sectionRadius = radius;
      const sectionCenterY = centerY;

      const startAngle = i * angleStep + Math.PI; // Поворот на 180 градусов
      const endAngle = (i + 1) * angleStep + Math.PI;
      const x1 = centerX + sectionRadius * Math.sin(startAngle);
      const y1 = sectionCenterY - sectionRadius * Math.cos(startAngle);
      const x2 = centerX + sectionRadius * Math.sin(endAngle);
      const y2 = sectionCenterY - sectionRadius * Math.cos(endAngle);

      // Уменьшаем трансформацию для активной секции, чтобы она не выходила за пределы
      const scaleFactor = 0.1; // Уменьшаем увеличение для активного сектора
      const translateX = isActive
        ? scaleFactor * radius * Math.sin((startAngle + endAngle) / 2)
        : 0;
      const translateY = isActive
        ? -scaleFactor * radius * Math.cos((startAngle + endAngle) / 2)
        : 0;

      const section = (
        <G
          key={i}
          transform={
            isActive
              ? `translate(${translateX}, ${translateY})` // Применяем сдвиг только для активной секции
              : ""
          }
        >
          <Path
            d={`M ${centerX} ${sectionCenterY} L ${x1} ${y1} A ${sectionRadius} ${sectionRadius} 0 0 1 ${x2} ${y2} Z`}
            fill={colors[i]}
          />
          {/* <Text
            x={
              centerX +
              (sectionRadius + 20) * Math.sin((startAngle + endAngle) / 2)
            }
            y={
              sectionCenterY -
              (sectionRadius + 20) * Math.cos((startAngle + endAngle) / 2)
            }
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize={14}
          >
            {labels[i]}
          </Text> */}
        </G>
      );

      if (isActive) {
        activeSection = section;
      } else {
        sections.push(section);
      }
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
            width: innerRadius * 2 * 0.9, // Уменьшаем на 90%
            height: innerRadius * 2 * 0.9, // Уменьшаем на 90%
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
