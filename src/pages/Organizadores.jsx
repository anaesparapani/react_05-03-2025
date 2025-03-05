import { useState, useEffect } from "react";
// Imports para criação de tabela
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
// TableHead é onde colocamos os titulos
import TableHead from "@mui/material/TableHead";
// TableBody é onde colocamos o conteúdo
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import api from "../axios/axios";

function listOrganizadores() {
  const [organizadores, setOrganizadores] = useState([]);

  async function getOrganizadores() {
    //Chamada da Api
    await api.getOrganizadores().then(
      (response) => {
        console.log(response.data.organizador);
        setOrganizadores(response.data.organizador);
      },
      (error) => {
        console.log("Erro ", error);
      }
    );
  }

  const listOrganizadores = organizadores.map((organizador) => {
    return (
      <TableRow key={organizador.id_organizador}>
        <TableCell align="center">{organizador.nome}</TableCell>
        <TableCell align="center">{organizador.email}</TableCell>
        <TableCell align="center">{organizador.senha}</TableCell>
        <TableCell align="center">{organizador.telefone}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getOrganizadores();
  }, []);

  return (
    <div>
      <h5>Lista de organizadores</h5>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead style={{ backgroundColor: "pink", borderStyle: "solid" }}>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Senha</TableCell>
              <TableCell align="center">Telefone</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>{listOrganizadores}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default listOrganizadores;
