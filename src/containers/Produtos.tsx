import { Game } from '../App'
import Produto from '../components/Produto'
import { useGetJogosQuery } from '../serivces/api'

import * as S from './styles'

const Produtos = () => {
  const { data, isLoading } = useGetJogosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {data?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
