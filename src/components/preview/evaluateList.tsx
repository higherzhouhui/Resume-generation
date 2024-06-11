import React, { ReactElement } from "react";
import { View, Text } from "@react-pdf/renderer";
import { styles as s } from "./style";

interface evaluateItem {
  time?: string;
  info: string;
}

interface Props {
  data: evaluateItem[];
}

export default function evaluateList({ data }: Props): ReactElement {
  return (
    <View style={s.wrapper}>
      <View style={s.wrapper_header}>
        <Text>自我评价</Text>
      </View>
      <View>
        {data.map((item, index) => {
          return (
            <View style={s.mb8} key={index}>
                <Text style={s.wrap}>{item.info}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
