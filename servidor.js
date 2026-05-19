import chalk from "chalk";
import fs from 'fs';
import path from 'path';
import Produto from './produto.js';

const BANCODADOS = path.join(import.meta.dirname, 'basedados.txt');

function lerDados(arquivo) {
    const dados = fs.readFileSync(arquivo, "utf-8")
                    .trim()
                    .split(/\t?\n/);
    const  produtos = [];
    dados.forEach(dado => {
        produtos.push(new Produto(dado));
    });   
    return produtos;             
}

function rodarServidor(){
    const produtos = lerDados(BANCODADOS);
    console.log(chalk.bgWhite.blackBright('|Nome\t| Preco\t| Estoque\t|'));
    produtos.forEach(produto => {
        console.log("|" + chalk.rgb(50, 0, 180)('${produto.nome}\t'))+
                    "|" + chalk.rgb(100, 0, 190)('${produto.preco}\t')+
                    "|" + chalk.rgb(180, 0, 200)('${produto.estoque}\t')
    });
}

rodarServidor();