function CalculaRank(vitorias, derrotas) {
    let resultado = vitorias - derrotas;
    let nivel = "";

    switch (resultado) {
        case resultado <= 10:
            nivel = "Ferro";
            break;
        case resultado > 10 && resultado <= 20:
            nivel = "Bronze";
            break;

        case resultado > 20 && resultado <= 50:
            nivel = "Prata";
            break;

        case resultado > 50 && resultado <= 80:
            nivel = "Ouro";
            break;
            
        case resultado > 80 && resultado <= 90:
            nivel = "Diamante";
            break;
                
        case resultado > 90 && resultado <= 100:
            nivel = "Lendário";
            break;
                    
        default:
            nivel = "Imortal";
            break;
    }

    return nivel;
}


let nivel = CalculaRank(500, 200);
console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`);
