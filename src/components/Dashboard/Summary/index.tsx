import { Container } from "./styles";
import incomeImg from '../../../assets/income.svg'
import outcomeImg from '../../../assets/outcome.svg'
import totalImg from '../../../assets/total.svg'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={ incomeImg } alt="Entradas - Imagem com seta verde apontando para cima" />
                </header>

                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={ outcomeImg } alt="Saídas - Imagem com seta vermelha apontando para baixo" />
                </header>

                <strong>- R$ 500,00</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={ totalImg } alt="Total - Imagem com símbolo do dólar" />
                </header>

                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}