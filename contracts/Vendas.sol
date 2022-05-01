//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.9.0;

contract Vendas{
   mapping(address => uint) public saldo;
   uint public totalIngressos = 100;
   string public evento = "Show Coldplay";
   mapping(address => string) public nome;

   event Vender(address indexed de, address indexed para, uint qtd, string comprador);

   constructor(){
     saldo[msg.sender] = totalIngressos;
   }

   function getSaldo(address endereco) public view returns(uint){
     return saldo[endereco];
   }

   function getEvento() public view returns(string memory){
     return evento;
   }

   function getComprador(address endereco) public view returns(string memory){
     return nome[endereco];
   }

   function getTotalIngressos() public view returns(uint){
     return saldo[msg.sender];
   }

   function vender(address para, string memory nom, uint qtd) public returns(bool){
      require(getSaldo(msg.sender) >= qtd, 'saldo insuficiente');
      saldo[para] += qtd;
      saldo[msg.sender] -= qtd;
      nome[para] = nom;
      emit Vender(msg.sender, para, qtd, nom);
      return true;
   }

}