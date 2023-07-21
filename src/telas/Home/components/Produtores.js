import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import Topo from "./Topo";
import Produtor from "./Produtor";
import useProdutores from "../../../hooks/useProdutores";

export default function Produtores() {
  const [titulo, lista] = useProdutores();

  const topoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      ListHeaderComponent={topoLista}
      renderItem={({item }) => <Produtor {...item} />}
      keyExtractor={({ id }) => id}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: "bold",
    color: "#464646",
  }
});
