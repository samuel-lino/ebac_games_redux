import Produto from '../components/Produto'
import { useGetjogosQuery } from '../services/api'

import * as S from './styles'

const Produtos = () => {
  const { data: jogos, isLoading } = useGetjogosQuery()

  if (isLoading) return <h2>Carregando...</h2>
  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
