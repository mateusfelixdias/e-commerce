'use client';

import Image from 'next/image';
import { Container } from './styles';
import search from '/public/search.svg';
import handbag from '/public/handbag.svg';

interface Props {
  keyword: string;
  onSearch: () => void;
  onKeyword: (keyword: string) => void;
}

export default function HeaderDesktop({ keyword, onSearch, onKeyword }: Props) {
  const isDisabled = !keyword.trim().length;
  const style = { cursor: isDisabled ? 'not-allowed' : '' };

  return (
    <Container>
      <h1>capputeeno</h1>

      <div>
        <div>
          <input
            value={keyword}
            placeholder="Procurando por algo específico?"
            onChange={({ target: { value } }) => onKeyword(value)}
          />

          <button
            style={style}
            title="Pesquisar"
            onClick={onSearch}
            disabled={isDisabled}
          >
            <Image src={search} alt="Lupa" />
          </button>
        </div>

        <button title="Notificações">
          <Image src={handbag} alt="Notificações" />
        </button>
      </div>
    </Container>
  );
}
