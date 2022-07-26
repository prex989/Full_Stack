function imprimirMensajeNumero(num: number): void {
  console.log(num);
}

function imprimirMensajeString(mensaje: String): void {
  console.log(mensaje);
}

function imprimir<AnyType>(msg: AnyType): void {
  console.log(msg);
}

imprimir<number>(1);

imprimir<string>("asdasd");

imprimir<string[]>(["asd", "asdsa", "sdasd"]);
