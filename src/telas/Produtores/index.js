import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import Topo from "./components/Topo";
import Produtor from "./components/Produtor";
import useProdutores from "../../hooks/useProdutores";
import useTextos from "../../hooks/useTextos";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Produtores({ melhoresProdutores }) {
  const navigation = useNavigation();
  const route = useRoute();
  
  const [exibeMensagem, setExibeMensagem] = useState(false);

  const lista = useProdutores(melhoresProdutores);
  const { titulo: tituloProdutores, mensagemCompra } = useTextos();

  const nomeCompra = route.params?.compra.nome;
  const timestampCompra = route.params?.compra.timestamp;
  const mensagemCompleta = mensagemCompra?.replace("$NOME", nomeCompra);

  useEffect(() => {
    setExibeMensagem(!!nomeCompra);
    let timeout;
    if (nomeCompra) {
      timeout = setTimeout(() => {
        setExibeMensagem(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [timestampCompra]);

  const TopoLista = () => {
    return (
      <>
        <Topo melhoresProdutores={melhoresProdutores} />
        { exibeMensagem && <Text style={estilos.compra}>{mensagemCompleta}</Text>}
        <Text style={estilos.titulo}>{tituloProdutores}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      style={estilos.lista}
      ListHeaderComponent={TopoLista}
      keyExtractor={({ id }) => id}
      renderItem={({item }) => (
        <Produtor
          {...item}
          aoPressionar={() => {
            navigation.navigate("Produtor", item);
          }}
        />
      )}
    />
  );
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: "#FFFFFF"
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: "bold",
    color: "#464646",
  },
  compra: {
    backgroundColor: "#EAF5F3",
    padding: 16,
    color: "#464646",
    fontSize: 16,
    lineHeight: 26,
  }
});