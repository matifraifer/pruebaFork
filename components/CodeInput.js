import { View } from "react-native";
import NumberInput from "../commons/NumberInput";
import { useState, useRef } from "react";

const CodeInput = () => {
  const [code, setCode] = useState();
  const [codeDos, setCodeDos] = useState("");
  const [codeTres, setCodeTres] = useState("");
  const [codeCuatro, setCodeCuatro] = useState("");

  const inputUno = useRef(null);
  const inputDos = useRef(null);
  const inputTres = useRef(null);
  const inputCuatro = useRef(null);
console.log(inputUno)
  return (
    <View style={{ flexDirection: "row" }}>
      <NumberInput
        ref={inputUno}
        value={code}
        onChangeText={(num) => {
          setCode(num);
        }}
        onSelectionChange={() => {
          code ? inputDos["current"].focus(): null;
        }}
      />
      <NumberInput
        ref={inputDos}
        value={codeDos}
        onChangeText={(num) => {
          setCodeDos(num);
        }}
        onSelectionChange={() => {
          codeDos ? inputTres["current"].focus() : null;
        }}
      />
      <NumberInput
        ref={inputTres}
        value={codeTres}
        onChangeText={(num) => {
          setCodeTres(num);
        }}
        // onSelectionChange={() => {
        //   codeTres ? inputCuatro.current.focus() : null;
        // }}
      />
      <NumberInput
        ref={inputCuatro}
        value={codeCuatro}
        onChangeText={(num) => {
          setCodeCuatro(num);
        }}
      />
    </View>
  );
};

export default CodeInput
