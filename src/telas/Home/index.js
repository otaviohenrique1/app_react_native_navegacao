import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import Topo from "./components/Topo";
import Produtor from "./components/Produtor";
import useProdutores from "../../hooks/useProdutores";
import useTextos from "../../hooks/useTextos";

export default function Produtores({ melhoresProdutores }) {
  const lista = useProdutores(melhoresProdutores);
  const { titulo: tituloProdutores } = useTextos();

  const TopoLista = () => {
    return (
      <>
        <Topo melhoresProdutores={melhoresProdutores} />
        <Text style={estilos.titulo}>{tituloProdutores}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      ListHeaderComponent={TopoLista}
      renderItem={({item }) => <Produtor {...item} aoPressionar={() => {}} />}
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